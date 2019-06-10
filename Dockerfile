FROM node:10

EXPOSE 3000

RUN apt-get update && apt-get clean

RUN npm -g install nodemon

WORKDIR /usr/src/to-do-app

ENTRYPOINT ["nodemon", "/usr/src/to-do-app/index.js"]