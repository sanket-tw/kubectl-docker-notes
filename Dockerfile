FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY express-server.js .

EXPOSE 3000

CMD ["npm","start"]
