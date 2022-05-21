# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /frontend

COPY package*.json ./
COPY . .

RUN npm install
 
EXPOSE 3000

CMD [ "npm", "start" ]