# --- reactjs ---
FROM node:16.14.2

# set working directory
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
 
EXPOSE 3000

CMD [ "npm", "start" ]