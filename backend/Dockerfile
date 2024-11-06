FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first, then install dependencies
COPY package*.json ./

# Install dependencies, ensure bcrypt is rebuilt for the container architecture
#RUN npm install && npm rebuild bcrypt --build-from-source
#RUN npm install --only=dev && npm install && npm rebuild bcrypt --build-from-source
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3001

# Start the app
CMD ["npm", "start"]
