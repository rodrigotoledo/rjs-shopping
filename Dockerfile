FROM node:13.12.0-alpine

WORKDIR /shopping

ENV PATH /shopping/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]