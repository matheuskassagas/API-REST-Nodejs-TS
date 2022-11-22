### Inicar projeto
```bash
yarn init -y
```

### Bibliotecas
```bash
# desenvolvimento
yarn add -D typescript nodemon ts-node @types/express @types/node

# producao
yarn add express pg typeorm dotenv reflect-metadata
```

### Package.json 
```bash
# execucao em ambiente dev com nodemon que executa outro comando em TS
"dev": "nodemon --exec ts-node ./src/index.ts" 
```