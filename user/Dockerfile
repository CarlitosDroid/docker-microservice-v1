FROM node:latest

COPY package.json package.json

RUN npm install

#Add your source files

COPY . . 

EXPOSE 3000

CMD [ "node", "index.js", "--use-strict"]