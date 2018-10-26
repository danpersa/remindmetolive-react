images_dir ?= ~/Prog/node/remindmetolive-react/src/images

dist/server/app.js:
	npm run build:prod

build-prod: dist/server/app.js

build-docker-app: build-prod
	docker build -f Dockerfile-App -t danpersa/remindmetolive-app:latest .

build-docker-skrop:
	docker build -f Dockerfile-Skrop -t danpersa/remindmetolive-skrop:latest .

build-docker-nginx:
	docker build -f Dockerfile-Nginx -t danpersa/remindmetolive-nginx:latest .

docker: build-docker-app build-docker-nginx build-docker-skrop

run-docker-node-1:
	docker run --rm -d --name node1 \
		-e IMAGE_HOST='http://localhost:9090' \
		-p 3000:3000 -t danpersa/remindmetolive-app:latest

run-docker-node-2:
	docker run --rm -d --name node2 \
		-e IMAGE_HOST='http://localhost:9090' \
		-p 3000 -t danpersa/remindmetolive-app:latest

run-docker-skrop:
	docker run --rm -d --name skrop \
		-v "$$(pwd)"/src/images:/images \
    -v "$$(pwd)"/.image-cache:/image-cache \
    -p 9090:9090 \
		-e STRIP_METADATA='TRUE' \
		-t danpersa/remindmetolive-skrop:latest -verbose

run-docker-nginx: run-docker-node-1 run-docker-node-2 run-docker-skrop
	docker run --rm -d --name nginx -p 8080:8080 --link node1:node1 \
		--link node2:node2 --link skrop:skrop \
		-t danpersa/remindmetolive-nginx:latest

stop-docker:
	docker kill nginx node1 node2 skrop
	docker container rm nginx node1 node2 skrop

docker-run:
	docker run -p 3000:3000 \
	  -e IMAGE_HOST='http://localhost:9090' \
		-t danpersa/remindmetolive-app:latest

docker-push:
	docker push danpersa/remindmetolive-nginx
	docker push danpersa/remindmetolive-app
	docker push danpersa/remindmetolive-skrop

remove-docker-images:
	docker rmi $$(docker images | grep "^<none>" | tr -s ' ' | cut -d ' ' -f 3)
