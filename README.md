# UniversityProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Requirements

To work with the project, you will need Node.js version `20.11.1` or higher.

You can download it from the [official Node.js website](https://nodejs.org/).

## Installation

1.  Clone the repository.
2.  Navigate to the `app` folder:
    ```bash
    cd app
    ```
3.  Install dependencies using npm:
    ```bash
    npm install
    ```

## Development server

Run `npm start` or `ng serve` to start the development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

If you prefer to run the application using Docker and docker-compose, you can start the services from the project root (where `docker-compose.yml` is located) with one of the following commands:

```bash
# build images and run containers in the background
docker-compose up -d --build
# or, with Docker Compose v2:
docker compose up -d --build
```

Notes:
- Make sure Docker is installed and the Docker daemon is running.
- Run the commands from the repository root (or from the folder that contains `docker-compose.yml`).