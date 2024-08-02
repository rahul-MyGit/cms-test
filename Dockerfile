FROM node:20-alpine

WORKDIR /user/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npm run prisma:migrate && npm run seed && npm start"]
