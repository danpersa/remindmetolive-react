dist/server/app.js:
	npm run build:prod

build-prod: dist/server/app.js

build-prod-docker-app: build-prod
	docker build -f Dockerfile-App -t danpersa/remindmetolive-app:latest .

build-prod-docker-skrop:
	docker build -f Dockerfile-Skrop -t danpersa/remindmetolive-skrop:latest .

build-prod-docker-nginx:
	docker build -f Dockerfile-Nginx -t danpersa/remindmetolive-nginx:latest .

build-prod-docker: build-prod-docker-app build-prod-docker-nginx build-prod-docker-skrop

run-prod-docker-node-1:
	docker run --rm -d --name node1 -p 3000 -t danpersa/remindmetolive-app:latest

run-prod-docker-node-2:
	docker run --rm -d --name node2 -p 3000 -t danpersa/remindmetolive-app:latest

run-prod-docker-skrop:
	docker run --rm -d --name skrop -p 9090:9090 -t danpersa/remindmetolive-skrop:latest -verbose

run-prod-docker-nginx: run-prod-docker-node-1 run-prod-docker-node-2 run-prod-docker-skrop
	docker run --rm -d --name nginx -p 80:8080 --link node1:node1 --link node2:node2 --link skrop:skrop -t danpersa/remindmetolive-nginx:latest

stop-docker:
	docker kill nginx node1 node2 skrop
	docker container rm nginx node1 node2 skrop

docker-run:
	docker run -p 3000:3000\
		-t danpersa/remindmetolive-app:latest

docker-push:
	docker push danpersa/remindmetolive-nginx
	docker push danpersa/remindmetolive-app

remove-docker-images:
	docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
