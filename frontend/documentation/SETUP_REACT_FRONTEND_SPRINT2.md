# React Frontend Setup Guide (Sprint 2)

## 1. Introduction

This document provides all the necessary steps to set up and run the development environment for the Devi Market Zero frontend application.

The project is built with **React** and bootstrapped using **Vite** for a fast development experience. It uses **TypeScript** for type safety and **Tailwind CSS** for styling.

## 2. Prerequisites

Before you begin, ensure you have the following software installed on your system:

- **Node.js**: Version `20.x` or later. We recommend using the latest Long-Term Support (LTS) version available from the [official Node.js website](https://nodejs.org/).
- **NPM** or **Yarn**: The package manager for Node.js. NPM is installed automatically with Node.js.
- **Git**: For cloning the source code repository.
- **Code Editor**: We highly recommend [Visual Studio Code](https://code.visualstudio.com/) for the best development experience with this project.

## 3. Installation and Configuration

Follow these steps to get the project running on your local machine.

**Step 1: Clone the Repository**
Open your terminal and clone the project repository.

```bash
git clone <YOUR_REPOSITORY_URL>
```

**Step 2: Navigate to the Project Directory**
Change your current directory to the `frontend` folder.

```bash
cd frontend
```

_Note: All subsequent commands must be run from the root of the `frontend` directory._

**Step 3: Install Dependencies**
Use `npm` to install all the required packages as defined in `package.json`.

```bash
npm install
```

## 4. Running the Application

To start the application in development mode, run the following command. This will start a local development server with Hot-Module Replacement (HMR) enabled, providing instant feedback in the browser as you make changes to the code.

```bash
npm run dev
```

Vite will output the local URL where the application is being served (typically `http://localhost:5173`).

## 5. Available Scripts

This project includes several pre-configured scripts to streamline development:

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles and bundles the application for production. The optimized output is placed in the `dist/` directory.
- `npm run test`: Runs the unit and integration tests using Vitest.
- `npm run lint`: Analyzes the source code for potential style and code quality issues using ESLint.

## 6. Recommended VS Code Extensions

For an enhanced development workflow, we recommend installing the following extensions in Visual Studio Code:

- **ESLint**: Integrates ESLint directly into the editor to highlight issues in real-time.
- **Prettier - Code Formatter**: Automatically formats code to maintain a consistent style across the project.
- **Tailwind CSS IntelliSense**: Provides advanced autocompletion, linting, and hover previews for Tailwind CSS utility classes.
- **EditorConfig for VS Code**: Helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

## 7. Troubleshooting

This section covers common issues that may arise during development and how to resolve them.

---

**Issue 1: `npm run build` fails with TypeScript errors.**

- **Symptom**: The build process terminates with errors like `'variable' is declared but its value is never read` or `'module' is imported but never used`.
- **Cause**: The project's TypeScript and build configurations are strict and do not allow unused variables or imports to ensure clean, maintainable code.
- **Solution**: Open the file indicated in the error message and remove the unused variable or import statement. Rerun the `npm run build` command after cleaning up the code.

---

**Issue 2: API calls (e.g., fetching products) fail with a 404 error after building the app.**

- **Symptom**: After running `npm run build` and serving the `dist/` folder with a static file server (e.g., `npx serve dist`), requests to the backend API (`/api/...`) fail.
- **Cause**: The Vite development server (`npm run dev`) is configured with a proxy in `vite.config.ts` that forwards requests from `/api` to the backend server. A simple static server does not have this proxying capability.
- **Solution**: This is expected behavior. In a production environment, the deployment server (e.g., NGINX, Apache) will be configured with a reverse proxy to correctly route API requests. The build artifact in the `dist/` directory is correct and ready for deployment. No changes are needed in the frontend code.

---
