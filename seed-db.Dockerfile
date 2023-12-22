FROM oven/bun:alpine
WORKDIR /app
COPY . .

# install pnpm and the other dependency
RUN bun install
RUN apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing atlas

CMD sh script/migrate.sh
