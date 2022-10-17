# pull official base image
FROM --platform=linux/x86_64 nginx:alpine

# set working directory within container
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# copy local 'build' directoryinto nginx's WORKDIR
COPY src/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
