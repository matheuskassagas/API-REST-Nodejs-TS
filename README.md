### Run application
```bash
# Necessario fazer as configuracoes do banco localmente (postgres)
# Outra opcao seria utilizar o docker compose
$ docker-compose up -d

# Start application 
$ yarn dev
```

### Gerar file migrations.. run  
```bash
# Rodar esse comando sempre que criar algum atributo em alguma entidade
$ yarn migration:generate

# Inserir no banco as migrations .. run
$ yarn migration:run
```

---

## Primeiros passos para iniciar o projeto
- Caso baixar o projeto, não é necessário utilizar esses comandos

### Inicar projeto 
```bash
# para iniciar um projeto
$ yarn init -y
```

### Bibliotecas utilizadas
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