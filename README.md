### First project NodeJs with TypeScript
- it's an API that I'm gonna continue doing many updates on it. It's a simple API but is something big to me,
- beacause is a new Language. If you want to test you should do a "git clone" on your computer and 
- configure a Postgresql. There is an arquive on the project that is "docker-compose", You don't need donwload Postgresql,
- just run the arquive.
- Following the steps ...

### Run docker (database)
```bash
$ docker-compose up -d
```

### Access your browser
```bash
# Put on url
localhost:8000

# login
admin@admin.com

#password
postgres
```

### Create a Database
- Configure a db
```bash
# database's name
develop

# USER
postgres

# PASSWORD
secret
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
- ./routes.ts it's all of the endpoits that you can use
```bash
# POST
url - localhost:3000/room
{
  "name": "Nodejs",
  "description": "Class of Programing API with NodeJs"
}

# GET 
url - localhost:3000/room
```
---

## First steps to start the project
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