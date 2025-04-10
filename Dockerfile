FROM node:18.20.8-slim

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL="mongodb://mongo:27017"
ENV DB_NAME=dev

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
