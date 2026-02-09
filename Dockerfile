FROM node:20 as build

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY ./app .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/app/browser /usr/share/nginx/html

EXPOSE 80