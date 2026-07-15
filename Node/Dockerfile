FROM node

WORKDIR /app

RUN npm install 

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY index.js index.js

CMD [ "node", "index.js" ]