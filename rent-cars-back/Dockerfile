# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

RUN npm prune --production

ARG MY_SERVICE_PORT=9000
EXPOSE ${MY_SERVICE_PORT}

# Start the server using the production build
CMD [ "npm", "run", "start:prod" ]