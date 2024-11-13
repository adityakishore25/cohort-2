FROM node:21

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]