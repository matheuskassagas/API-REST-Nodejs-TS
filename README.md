### Inicar projeto 
```bash
# para iniciar um projeto
yarn init -y
```

### Bibliotecas utilizadas
```bash
# desenvolvimento
yarn add -D typescript nodemon ts-node @types/express @types/node

# producao
yarn add express pg typeorm dotenv reflect-metadata
```

### Inicializar o TS 
```bash
npx tsc --init
```

### Package.json 
```bash
# execucao em ambiente dev com nodemon que executa outro comando em TS
"dev": "nodemon --exec ts-node ./src/index.ts" 
```

### Docs 
```
typeorm.io
```
### Run application
```bash
# Necessario fazer as configuracoes do banco localmente 
# Outra opcao seria utilizar o docker compose
yarn dev
```

### Migration:generate
```bash
# Gerar automaticamente uma migration no banco de dados 
# Coloque essa linha no scripts ./package.json
"migration:generate": "typeorm-ts-node-commonjs -d ./src/data-source.ts migration:generate ./src/migrations/default"
```