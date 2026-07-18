# Example Dockerfile for the Phase 4 Node API (apps/api).
# Multi-stage: build TypeScript -> lean final image.
# Adjust the paths to match the monorepo layout you set up in week 19.

# ---- build ----
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY pnpm-lock.yaml package.json ./
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @dev-lab/api build

# ---- runtime ----
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable
COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/apps/api/package.json ./package.json
RUN pnpm install --prod --frozen-lockfile
EXPOSE 3000
CMD ["node", "dist/main.js"]
