FROM node:18-alpine AS build
WORKDIR /app
COPY . .
ARG POSTGRES_URL

# install pnpm
RUN npm install -g pnpm

# install dependency
RUN pnpm install \
    && npx kysely-codegen --dialect postgres --url $POSTGRES_URL

# lint and test
RUN npx svelte-kit sync \
    && npx prettier --write --plugin-search-dir=. . \
    && npx prettier --check --plugin-search-dir=. . \
    && npx eslint . && npx svelte-check --tsconfig ./tsconfig.json

# build sveltekit app
RUN npx vite build 

# build the final image
FROM node:18-alpine
WORKDIR /app

# copy the build and the package.json
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

ENV port 3000
CMD [ "node", "build" ]
