docker-build:
	docker build -t danpersa/remindmetolive-react:latest .

build-prod:
	npm run build:prod

docker-run:
	docker run -p 3000:3000\
	 -t danpersa/remindmetolive-react:latest

 docker-push:
	docker push danpersa/remindmetolive-react

build-prod-node:
	docker build -f ./docker/Dockerfile-Node -t danpersa/remindmetolive-react-node:latest .

docker-run-node:
	docker run -p 3000:3000\
	 -t danpersa/remindmetolive-react-node:latest
