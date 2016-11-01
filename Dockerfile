FROM node:6.9


RUN mkdir -p /usr/src/fresh-tomatos
WORKDIR /usr/src/fresh-tomatos 

COPY . /usr/src/fresh-tomatos 
RUN npm install

# application's default port
EXPOSE 8891

CMD ["npm", "start"]







