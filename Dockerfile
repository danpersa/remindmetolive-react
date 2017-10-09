FROM node

RUN mkdir -p /home/app/webapp/public
COPY ./dist/client /home/app/webapp/public
COPY ./dist/server /home/app/webapp/
WORKDIR /home/app/webapp

EXPOSE 3000
CMD [ "node", "/home/app/app.js" ]
