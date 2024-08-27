FROM node:22-alpine AS build
WORKDIR /app
COPY . .

# install devDependencies
RUN apk add curl && npm install -g pnpm

# build and install dependency
RUN pnpm i && npx vite build

# remove devDependencies
RUN rm -r ./node_modules && pnpm install -P

# build the final image
FROM node:22-alpine
WORKDIR /app

# create the non root user
RUN addgroup -g 1001 portfolio_group && adduser -u 1001 -G portfolio_group -s /bin/sh -D portfolio

#copy the build and the package.json
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
RUN chown -R portfolio:portfolio_group /app

# set the user
USER portfolio
ENV port=3000
CMD [ "node", "build" ]
