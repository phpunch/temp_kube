FROM node:10

# You need to add commands for the following sections!!!

# --> Add everything in the current directory to our image, in the 'app' folder.
ADD . /app
# COPY .env.docker /app/.env
# --> Install dependencies
WORKDIR /app

RUN npm install 

# --> Expose our server port.
EXPOSE 3000
# --> Run our app.
# RUN npm run build

# RUN npm install -g serve

CMD ["npm", "start"]
