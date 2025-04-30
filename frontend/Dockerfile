# Stage 1: Build
FROM node:18-slim AS builder

WORKDIR /app

# Copy dependency definitions and install
COPY package.json package-lock.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build Next.js (using standalone output)
RUN npm run build

# Stage 2: Production runner
FROM node:18-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy standalone output from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Ensure the correct port is exposed
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]




