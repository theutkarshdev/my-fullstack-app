FROM node:alpine AS build
WORKDIR /app
COPY . /app
RUN yarn
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN yarn build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]