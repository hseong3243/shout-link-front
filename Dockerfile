FROM node:latest
WORKDIR ~/Documents/projects/shout-link/frontend

COPY package.json .

ADD . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
