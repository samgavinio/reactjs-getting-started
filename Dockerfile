FROM node:6.8.1 as builder

RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn

RUN mkdir /app
WORKDIR /app

COPY ["package.json", "yarn.lock",  "./"]
RUN yarn install

COPY [".babelrc", "webpack.config.js", "./"]
COPY src src
RUN yarn run build

FROM nginx:alpine

RUN mkdir -p /app
WORKDIR /app
COPY --from=builder /app/dist /app
ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
