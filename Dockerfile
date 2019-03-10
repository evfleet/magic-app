FROM node:10.15.3

WORKDIR /usr/code

COPY package.json yarn.lock lerna.json ./

RUN yarn global add lerna

RUN yarn run bootstrap

COPY . .




