ARG NG_ENV=production

FROM node:20-slim as build-stage
ARG NG_ENV
WORKDIR /usr/app
COPY . .
RUN npm i
RUN npm run build --configuration=$NG_ENV

FROM nginx:1.21-alpine
LABEL maintainer="leaucimportant"
EXPOSE 5000

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /usr/app/dist/ecommerce/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
