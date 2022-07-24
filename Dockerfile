FROM node:14

# install dependencies
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy all local files into the image.
COPY . .

RUN yarn build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM node:14-slim

WORKDIR /app
COPY --from=0 /app .
COPY . .

EXPOSE 3000
CMD ["node", "./build"]
