## Description

[NFT Gallery](https://github.com/bwmsites/nft-gallery), a Solana NFT's source wrapper.

## Requirements

-   [Node v.14+](https://nodejs.org/)
-   [Docker](https://www.docker.com/)

## Environment

First of all copy the file `.env.example` as `.env` to load the app settings.

```bash
$ cp .env.example .env
```

## Docker

It is possible to run and test the application using docker with no need to install depencies as described bellow. For that execute the following commands:

```bash
$ docker build -t wisdon-nft . && docker run -dp 5001:5001 wisdon-nft
```

Replace the example port `5001` according to the settings in the `.env` file.

---

#### Checking if the docker container is up and running

For the purpose of testing if the docker container is up and running you can execute the command bellow in you terminal

```bash
$ curl --request GET \
  --url http://localhost:5001/_health
```

---

## Installation

This project was built with [NestJs](https://docs.nestjs.com/), so for a better developer experience install its cli.

```bash
$ npm i -g @nestjs/cli
```

#### Package Manager

Please consider using the package manager [yarn](https://yarnpkg.com/) to install dependencies and run the server. Just run the command bellow to install all dependencies.

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testing

```bash
# unit tests
$ yarn test

```

## Stay in touch

-   Author - [Bruno C. Silva](https://www.linkedin.com/in/brunobwm/)

## License

This project is [ISC licensed](LICENSE).
