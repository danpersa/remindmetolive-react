docker-build:
	docker build -t danpersa/remindmetolive-react:latest .

build-prod:
	npm run build:prod

docker-run:
	docker run -p 3000:3000\
	 -t danpersa/remindmetolive-react:latest

 docker-push:
	docker push danpersa/remindmetolive-react
