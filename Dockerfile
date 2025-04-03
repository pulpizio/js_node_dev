FROM node:22-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

RUN apk update
RUN apk add bash
RUN apk add git

CMD ["npm", "run", "dev"]