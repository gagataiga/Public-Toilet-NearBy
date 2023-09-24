FROM node:18.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3001

CMD ["node" , "./dist/app.js"]