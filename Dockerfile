FROM node:10.15.3 as builder

RUN mkdir /simpsons

WORKDIR /simpsons

COPY package.json /simpsons

RUN npm i

COPY . /simpsons

RUN npm run build

FROM nginx:latest
COPY --from=builder /simpsons/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]