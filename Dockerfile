FROM node:18-alpine AS build
WORKDIR /app
COPY . .

# install pnpm
RUN npm install -g pnpm

# lint and test
RUN pnpm install \
    && npx svelte-kit sync \
    && npx prettier --write --plugin-search-dir=. . \
    && npx prettier --check --plugin-search-dir=. . \
    && npx eslint . && npx svelte-check --tsconfig ./tsconfig.json

# build and install dependency
RUN npx vite build && rm -r ./node_modules \
    && pnpm install -P

# build the final image
FROM node:18-alpine
WORKDIR /app

# copy the build and the package.json
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

ENV port 3000
CMD [ "node", "build" ]
