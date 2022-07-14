ARG NODE_VERSION=16.15.0

FROM node:${NODE_VERSION}-alpine as builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build


FROM node:${NODE_VERSION} AS prod

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=frontend_prod_build /app/public ./public
COPY --from=frontend_prod_build /app/package.json ./package.json
COPY --from=frontend_prod_build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=frontend_prod_build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=frontend_prod_build /app/next.config.js ./next.config.js
COPY --from=frontend_prod_build /app/next-i18next.config.js ./next-i18next.config.js

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]