docker-build:
	docker build -t danpersa/remindmetolive-react:latest .

docker-run:
	docker run -p 80:8080 \
	 -t pierone.stups.zalan.do/pathfinder/innkeeper:$(version)
