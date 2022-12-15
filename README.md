<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## First project NodeJs with TypeScript
- It's an API that I'm gonna continue doing many updates on it. It's a simple API but is something big to me, 
because is a new Language. If you want to test you should do a "git clone" on your computer and 
configure a Postgresql. There is an arquive on the project that is "docker-compose", You don't need donwload Postgresql,
just run the arquive.
Following the steps ...

## Status: In Process

### Create an arquive .env
```bash
# put this enviroment variables on it

# how to see your ip "ip  addr show"
DB_HOST="YOUR IP" or "localhost"

DB_PORT=5432
DB_USER=postgres
DB_PASS=secret
DB_NAME=develop

JWT_PASSWORD=

RUN_APPLICATION="yarn dev"

PORT=3000
```

### Run docker (database)
```bash
$ docker-compose up -d
```

### Access your browser
```bash
# Put on url
localhost:8000

# LOGIN
admin@admin.com

# PASSWORD
postgres
```

### Create a Database
- Configure a db
```bash
# DATABASE'S NAME
develop

# USER
postgres

# PASSWORD
secret
```

- If your are using a docker, run again 
```bash
$ docker-compose up -d
```

- If your are using locally, following the commands
### Download dependences
```bash
yarn install
```
 
### Create file migrations.. run  
```bash
# Run this command to create an arquive of entities
$ yarn migration:generate

# Run this command to generate the entities on database
$ yarn migration:run
```

### Start application 
```
$ yarn dev
```

### Use Postman PORT 3000
- On file ./routes.ts it's all of the endpoits that you can use
```bash
# POST
url - localhost:3000/room

# BODY .JSON
{
  "name": "Nodejs",
  "description": "Class of Programing API with NodeJs"
}

# GET 
url - localhost:3000/room
```
---


## How to start a new project
- Caso baixar o projeto, não é necessário utilizar esses comandos

### Start project 
```bash
# para iniciar um projeto
$ yarn init -y
```

### Used libraries
```bash
# desenvolvimento
$ yarn add -D typescript nodemon ts-node @types/express @types/node

# producao
$ yarn add express pg typeorm dotenv reflect-metadata

# A
$ yarn add express-async-errors   

# Bcrypt
$ npm install bcrypt
$ npm install -D @types/bcrypt

# JWT (token) / jwt.io
$ npm install jsonwebtoken
$ npm install -D @types/jsonwebtoken
```

### Inicializar o TS 
```bash
$ npx tsc --init
```

### Package.json 
```bash
# execucao em ambiente dev com nodemon que executa outro comando em TS
"dev": "nodemon --exec ts-node ./src/index.ts" 

# Coloque essa linha no scripts ./package.json
```

### Docs 
```
typeorm.io
```

### Migration:generate
```bash
# Gerar automaticamente uma pasta no projeto migration das querys do banco de dados 
"migration:generate": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:generate ./src/migrations/default",

# Gerar automaticamente as querys no banco de dados 
"migration:run": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:run"

# Coloque essas linhas no scripts ./package.json
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Documentation - [Documentation NestJs](https://docs.nestjs.com/) / [Documentation TypeOrm](https://typeorm.io/)
- Video for supporting - [Video](https://www.youtube.com/watch?v=SnxAq9ktyuo) / [Video](https://www.youtube.com/watch?v=9AO2hZJsHrs)

## License

Nest is [MIT licensed](LICENSE).



