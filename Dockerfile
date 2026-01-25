FROM oven/bun:alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY .output ./.output

EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]
