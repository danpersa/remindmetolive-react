FROM node:8.6.0-alpine

RUN mkdir -p /home/app/webapp/public
RUN mkdir -p /home/app/webapp/meta
COPY ../meta /home/app/webapp/meta
COPY ./dist/client /home/app/webapp/public
COPY ./dist/server /home/app/webapp/
WORKDIR /home/app/webapp

EXPOSE 3000
CMD [ "node", "/home/app/webapp/app.js" ]
