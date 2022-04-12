# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /frontend
COPY . .
#COPY package*.json ./

RUN npm install
 
EXPOSE 3000

CMD [ "npm", "start" ]