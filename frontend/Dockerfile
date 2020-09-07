# Stage 1
FROM node:latest as build-step
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build --prod

#Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=build-step /app/docs /usr/share/nginx/html

