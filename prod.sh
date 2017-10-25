
docker run --rm -d --name node1 -p 3000 -t danpersa/remindmetolive-app:latest
docker run --rm -d --name node2 -p 3000 -t danpersa/remindmetolive-app:latest
docker run --rm -d --name skrop -v /images:/images -p 9090 -t danpersa/remindmetolive-skrop:latest
docker run --rm -d --name nginx -p 80:8080 --link node1:node1 --link node2:node2 --link skrop:skrop -t danpersa/remindmetolive-nginx:latest
