FROM node:14-alpine

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY . /app

RUN yarn install

RUN yarn build

CMD ["yarn", "start:prod"]
