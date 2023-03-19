FROM node:16.15-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm i --force
COPY . /app
CMD ["npm", "start"]
EXPOSE 3000