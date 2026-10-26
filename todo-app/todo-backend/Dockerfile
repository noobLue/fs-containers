FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm ci --omit=dev

#ENV DEBUG=temp:*

USER node

CMD ["npm", "start"]
