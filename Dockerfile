FROM node:10.15.3

WORKDIR /usr/code

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

RUN yarn run bootstrap


