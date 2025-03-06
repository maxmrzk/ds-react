ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Install dependencies, including devDependencies
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]