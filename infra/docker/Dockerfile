FROM node:16-alpine

COPY ./packages/client ./packages/client
COPY ./packages/server ./packages/server
COPY ./packages/shared ./packages/shared
COPY ./scripts/build.ts ./scripts
COPY ./package*.json .
COPY ./tsconfig.json .

RUN npm ci --only=production --ignore-scripts
RUN npm rebuild esbuild
RUN npm run build

EXPOSE 3000

CMD npm start
