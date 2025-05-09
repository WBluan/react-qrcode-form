# Etapa 1: Build da aplicação
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor de produção
FROM node:20-alpine AS production

WORKDIR /app

# Instala o servidor estático
RUN npm install -g serve

# Copia os arquivos de build da etapa anterior
COPY --from=builder /app/dist ./dist

# Porta padrão do serve
EXPOSE 3000

# Comando para rodar o servidor
CMD ["serve", "-s", "dist", "-l", "3000"]
