# Use the official Node.js image as the base image
FROM node:14

# Install tini
RUN apt-get update && apt-get install -y tini

# Create a directory for your app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your app's source code to the container
COPY . .

# Set tini as the entrypoint
ENTRYPOINT ["/usr/bin/tini", "--"]

# Specify the command to run your application
CMD ["npm", "run", "start"]