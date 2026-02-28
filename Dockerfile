# Estágio 1: Instalar dependências
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Estágio 2: Build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Gera o Prisma Client e faz o build do Next.js
RUN npx prisma generate
RUN npm run build

# Estágio 3: Runner (Produção)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Variável para o banco
ENV DATABASE_URL=postgresql://postgres:12345@db:5432/vivioteca_db?schema=public

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# --- [NEW] Copiar o arquivo de configuração do Prisma 7 ---
# Sem isso, o 'npx prisma migrate deploy' não sabe qual é a URL do banco
COPY --from=builder /app/prisma.config.js ./ 


# Copiar apenas o necessário do estágio de build
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma


RUN npm install prisma @prisma/config

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && node server.js"]