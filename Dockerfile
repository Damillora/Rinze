FROM node:16-alpine
# install dependencies
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build
FROM node:16-alpine
WORKDIR /app
COPY --from=0 /app/build /app
COPY --from=0 /app/package.json /app
COPY --from=0 /app/node_modules /app/node_modules

EXPOSE 3000
CMD ["node","./index.js"]
