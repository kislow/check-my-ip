FROM node:16.10.0-alpine3.14
WORKDIR /app
COPY . ./
RUN npm install
CMD [ "node", "app.js"]
EXPOSE 8081
