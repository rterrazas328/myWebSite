FROM node:24 as build

WORKDIR /src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 51751


CMD ["npm", "start"]