FROM nginx

# create the default directory
RUN mkdir -p /opt/prak/websites

# copy all of the static files there
ADD static /opt/prak/websites/

# copy the run script
COPY tools/startup.sh /opt/prak

# set the work directory
WORKDIR /opt/prak

ENTRYPOINT ["./startup.sh"]