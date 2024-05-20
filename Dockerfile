FROM node:20.13.1

#create a directory
WORKDIR /app

#copy files to the working directory
COPY . .

# Copy the package.json file to the working directory
COPY package.json .

# Install dependencies
RUN npm install 

# Build the Vite application
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]