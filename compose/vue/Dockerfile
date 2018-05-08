FROM node

WORKDIR /app

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && yarn install
RUN cd /app && ln -s /tmp/node_modules
