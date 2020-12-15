FROM node:lts-alpine
RUN apk add git
WORKDIR /usr/src
ADD . .
RUN rm -rf /node_modules
RUN yarn cache clean
RUN rm -rf yarn.lock
RUN rm -rf build
RUN rm -rf package-lock.json
RUN yarn
RUN yarn build
CMD [ "yarn", "start" ]