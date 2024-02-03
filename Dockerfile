# Use the official Node.js 18.14.0 image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app and place the output in the ./dist folder
RUN yarn build

# Command to start Nginx when the container runs
CMD ["node", "dist/index.js"]
