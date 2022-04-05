# 🤖 Modern React Boilerplate

This project is boilerplate for starting modern React web app.

Bootstrapped with [Vite](https://github.com/vitejs/vite.git).

## Install Dependencies
Install with npm:
```sh
npm i
```

## Available Scripts
Run commands in the project directory.

### Start dev server
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for production
```sh
npm run build
```

### Locally preview production build
```sh
npm run preview
```

## Start Docker Container

### Using the `npm`
```sh
npm run docker
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### Using the `docker` commands
Build the app’s container image.
```sh
docker build . --no-cache -t modern-react-boilerplate -f infra/docker/Dockerfile
```
Start an app container.
```sh
docker run -p 8080:3000 --rm modern-react-boilerplate
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Useful Links
- [Conventional Commits](https://www.conventionalcommits.org)
- [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902)
- [TypeScript Performance](https://github.com/microsoft/TypeScript/wiki/Performance)
- [Well-Known URIs](https://www.rfc-editor.org/rfc/rfc8615#section-3)
