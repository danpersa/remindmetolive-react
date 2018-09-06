docker run --rm -d --name node1 \
  -e IMAGE_HOST='http://static2.remindmetolive.com' \
  -p 3000 -t danpersa/remindmetolive-app:latest

docker run --rm -d --name node2 \
  -e IMAGE_HOST='http://static2.remindmetolive.com' \
  -p 3000 -t danpersa/remindmetolive-app:latest

docker run --restart=always -d --name skrop \
  -v /images:/images \
  -p 9090 \
  -t danpersa/remindmetolive-skrop:latest -verbose

docker run --rm -d --name nginx -p 80:8080 \
  --link node1:node1 --link node2:node2 --link skrop:skrop \
  -t danpersa/remindmetolive-nginx:latest

docker run -d --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock logzio/logzio-docker \
  -t iDnQlJZhSIjzPwPWtzOWgUdvoPdwKeec -z us -a env=prod
