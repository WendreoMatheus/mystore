FROM node:lts-alpine
ENV NODE_ENV=development

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY prisma ./prisma/
COPY tsconfig.json ./

RUN npm i

COPY . . 

ENTRYPOINT ["npm", "run", "dev"]
