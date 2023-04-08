FROM node:10.19 AS builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@1.7.1 --unsafe

COPY . /usr/src/app

RUN ng build --prod

FROM nginx:1.13.9-alpine

COPY --from=builder /usr/src/app/dist/smart-football-table-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
