# Use Node.js as the base image for building the app
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Set environment variable for API URL (comes from docker-compose)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build the React app
RUN npm run build

# Use Nginx as the base image for serving the built app
FROM nginx:latest

# Remove the default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built frontend files to the Nginx serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
