# Use phusion/passenger-full as base image. To make your builds reproducible, make
# sure you lock down to a specific version, not to `latest`!
# See https://github.com/phusion/passenger-docker/blob/master/Changelog.md for
# a list of version numbers.

FROM danpersa/passenger-nodejs:0.9.25

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

RUN rm -f /etc/service/nginx/down

# Remove the default site
RUN rm /etc/nginx/sites-enabled/default

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD nginx/webapp.conf /etc/nginx/sites-enabled/webapp.conf
ADD nginx/secret_key.conf /etc/nginx/main.d/secret_key.conf
ADD nginx/gzip_max.conf /etc/nginx/conf.d/gzip_max.conf
ADD nginx/00_app_env.conf /etc/nginx/conf.d/00_app_env.conf

EXPOSE 3000

USER app
ENV HOME /home/app

# copy the app and give permissions
RUN mkdir -p /home/app/webapp/public
RUN mkdir -p /home/app/webapp/meta
COPY ./dist/client /home/app/webapp/public
COPY ./dist/server /home/app/webapp/
COPY ./meta /home/app/webapp/meta
WORKDIR /home/app/webapp

CMD passenger start
