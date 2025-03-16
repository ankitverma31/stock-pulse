# Stock Pulse - Installation, Build, and Deployment Guide

## 📌 Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Version 20+ recommended)
- [npm](https://www.npmjs.com/) (Included with Node.js)
- [Docker](https://www.docker.com/)

## 📦 Installation

Clone the repository and install dependencies:

```sh
# Clone the repository
git clone <repository-url>
cd stock-pulse

# Install dependencies
npm install
```

## 🚀 Running the Development Server

To start the development server:

```sh
npm run dev
```

This will start Vite and host the app locally.

## 🔧 Code Quality

Run linting to check for code issues:

```sh
npm run lint
```

## 🏗️ Building the Project

To build the project for production:

```sh
npm run build
```

This compiles TypeScript and builds the project using Vite.

## ✅ Running Tests

To execute tests:

```sh
npm run test
```

This runs Vitest in non-watch mode to prevent hanging in CI/CD.

## 🐳 Docker Deployment

### 📌 Build Docker Image

To create a Docker image:

```sh
npm run docker:build
```

This will build the project and package it inside a lightweight Nginx container.

### 🚀 Run the Container

To start the container:

```sh
npm run docker:run
```

This runs the application on **port 8080**.

### 🛑 Stopping and Removing the Container

To stop the running container:

```sh
npm run docker:stop
```

To remove the container:

```sh
npm run docker:remove
```

### 🔄 Restart the Container

```sh
npm run docker:restart
```

This stops, removes, and restarts the container.

## 🌍 Deploying to a Server

1. Build the Docker image on the server:
   ```sh
   npm run docker:build
   ```
2. Run the container:
   ```sh
   npm run docker:run
   ```
3. Configure a reverse proxy (e.g., Nginx) to serve the application on your domain.

### 📌 Exposing the App via Reverse Proxy (Example: Nginx)

Add the following to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 🎯 Conclusion

You now have Stock Pulse running locally and in a Docker container, ready for deployment. 🚀
