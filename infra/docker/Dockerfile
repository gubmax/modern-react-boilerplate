FROM node:16-alpine

COPY ./packages ./packages
COPY ./scripts ./scripts
COPY ./package*.json .
COPY ./tsconfig.json .

RUN npm i --force --production --ignore-scripts
RUN npm rebuild esbuild
RUN npm run build

EXPOSE 3000

CMD npm start
