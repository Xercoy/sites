# About

This repo contains all of my websites in one place, where they can exist within a single docker image. 

To build:

```
docker build -t <tag> -f infrastructure/Dockerfile .
```

To run:
Port 80 needs to be open on the container.
Additionally, the env var WEBSITE_NAME must contain the name of the dir enclosing the website.

```
docker run -ti -p 80:80 -e WEBSITE_NAME=test website-test:v2
```

