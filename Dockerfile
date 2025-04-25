FROM node:18

COPY . /app

WORKDIR /app

RUN npm install && npm run build_docker

EXPOSE 3000

CMD ["npm", "run", "start_docker"]