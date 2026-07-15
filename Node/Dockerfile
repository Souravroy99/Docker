# FROM node

# WORKDIR /app

# RUN npm install 

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# COPY index.js index.js

# CMD [ "node", "index.js" ]



# # # # More optimized version: 

FROM node

WORKDIR /app


COPY package*.json .
COPY . . 
RUN npm install

CMD [ "node", "index.js" ]