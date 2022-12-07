FROM ubuntu:22.04

WORKDIR /api

COPY . .

RUN apt-get update && apt-get install curl lsb-release gnupg -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - 
RUN apt-get install -y nodejs 
RUN npm install --global yarn -y
RUN yarn install
RUN yarn add express pg typeorm dotenv reflect-metadata
RUN yarn add -D typescript nodemon ts-node @types/express @types/node
RUN yarn add express-async-errors
RUN yarn migration:generate
RUN yarn migration:run


EXPOSE 3000


## Command to access inside the container 
## docker container run --rm -it -p 3001:3001 --name api-rest-nodejs-ts_node api-rest-nodejs-ts_node /bin/bash