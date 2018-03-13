FROM node:slim

# Declare necessary build parameters
ARG REACT_APP_API_HOST
ARG REACT_APP_API_TOKEN

ENV REACT_APP_API_HOST=$REACT_APP_API_HOST
ENV REACT_APP_API_TOKEN=$REACT_APP_API_TOKEN

# Set a working directory
WORKDIR /usr/src/app

# Install Node.js dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy our app into the working directory
COPY . /usr/src/app

# Build the app
RUN yarn run build

# Install serve to serve our simple app statically
RUN npm install -g serve

# Start up the server
CMD ["serve", "-s", "build", "-p", "80"]
