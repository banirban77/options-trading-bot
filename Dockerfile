FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 9090
CMD ["pm2-runtime", "backend/index.js", "--name", "options-bot"]
