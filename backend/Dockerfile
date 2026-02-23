# ---------- Build stage ----------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY . .

# ---------- Runtime stage ----------
FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8080

CMD ["server.js"]