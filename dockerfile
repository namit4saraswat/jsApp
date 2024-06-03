# Use an official Node.js runtime as the base image
FROM node:14-slim as build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

FROM node:14-slim

WORKDIR /app

COPY --from=build /app/server.js server.js
# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "server.js" ]