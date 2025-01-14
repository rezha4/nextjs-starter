# Base
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development
FROM base AS development
CMD ["npm", "run", "dev"]

# Production
FROM base AS production
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
