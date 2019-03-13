FROM node:10.15.3

WORKDIR /usr/code

COPY package.json .

RUN yarn install

COPY . . 
