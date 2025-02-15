<!-- # Swissborg

```
│── /src
│   ├── /components 
│   ├── /routes
│   │   ├── modules
│   │   ├──── home
│   │   ├──── summary
│   ├── /utils
│   ├── /services
│   ├── root.tsx
│   ├── routes.tsx
│   ├── app.css
│── /public
│── /vite.config.ts
│── /package.json
│── /pnpm-lock.yaml
│── /tsconfig.json
```

React App setup with `pnpm 10.0.0` and version `node.js v22.13.1`

After cloning the repo, run `pnpm install` to install all dependencies.
Before running the frontend app run backend on `localhost:8080` with command in backend `pnpm start` in your repo.
To run React App run `pnpm run dev`.

I used multiple popular libraries that have awesome community support for React:

- vite (to serve the app)
- axios (as http client)
- React Query (to manage data fetching)
- tailwindcss (UI library)
- headlessui (UI library)
- react router dom v7 (navigation)
- typescript

App is done in way that we have a lot of components and modules that are reusable.

Idea was to have some modules in routes that have in his folder components, hooks and types just for that components and to have one global folder for components that are used in multiple places.
 
Also we have 

## Project Architecture

The project follows a modular architecture with clear separation of concerns:

### Core Directories
- `/components`: Reusable UI components used across multiple modules
- `/routes`: Feature-based modules containing route-specific components, hooks, and types
  - `/home`: Home page module
  - `/summary`: Summary page module
- `/utils`: Utility functions and helpers
- `/services`: API services and data fetching logic

### Key Features
- **Modular Structure**: Each route has its own module with dedicated components, hooks, and types
- **Global Components**: Shared components in the `/components` directory
- **Type Safety**: Full TypeScript support throughout the application
- **API Integration**: Axios with React Query for efficient data fetching and caching
- **Modern UI**: TailwindCSS and HeadlessUI for responsive, accessible design

## Available Scripts

- `pnpm install` - Install project dependencies
- `pnpm run dev` - Start development server
- `pnpm run build` - Build production bundle

### Environment Setup
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Create a `.env` file based on `.env.example` (if applicable)
4. Start development server: `pnpm run dev`
5. Usually I have .env in .gitignore but for this case that will not be needed.

____________

Update

As I didn't use in first implementation Context to hold data as there is just 3 items in the app I decided to use local state. I just made small change to save data in context and use it in components as it's possible to persist data in context.

Some of values are null on first load as I get so sometimes happens that we can find false in values and that is one of cons of this implementation. Also, if this data needs to be secured than loading in localStorage is wrong or we need to use some crypt package to save data in localStorage.

Now you can find implementation with context in Code also but we can also use Zustand, Redux, MobX etc. for this implementation. -->

# Swissborg Project Documentation

### Project Overview

This project is a React App set up with pnpm 10.0.0 and Node.js v22.13.1. It follows a modular architecture to ensure maintainability, scalability, and reusability. The app integrates several modern libraries for a seamless development experience.

### Directory Structure

```
│── /src
│   ├── /components 
│   ├── /routes
│   │   ├── modules
│   │   ├──── home
│   │   ├──── summary
│   ├── /utils
│   ├── /services
│   ├── root.tsx
│   ├── routes.tsx
│   ├── app.css
│── /public
│── /vite.config.ts
│── /package.json
│── /pnpm-lock.yaml
│── /tsconfig.json
```

### Getting Started

Install pnpm (v10.0.0 or later)
Install Node.js (v22.13.1 or later)

### Installation & Setup

Clone the repository

```
git clone git@github.com:mrabdulrrahimklis/swissborg.git
cd swissborg-react
```

### Install dependencies

```
pnpm install
```

### Start the backend

1. Ensure the backend is running on localhost:8080.
2. Navigate to the backend repository and run:
3. `pnpm start`
4. Run frontend
5. `pnpm run dev` or `pnpm dev`

## Technologies Used

This project leverages several widely adopted libraries for efficient development:
1. Vite – Fast development server and build tool
2. Axios – HTTP client for API requests
3. React Query – Efficient data fetching and caching
4. Tailwind CSS – Utility-first CSS framework for styling
5. React Router v7 – Client-side navigation
6. TypeScript – Ensuring type safety throughout the app

## Architecture
The project is structured to encourage modularity and reusability:
1. Modular Route-based Architecture: Each route has a dedicated module containing its components, hooks, and types.
2. Global Reusable Components: Shared UI components are stored in the /components directory.
3. Type Safety with TypeScript: All components and services utilize TypeScript for improved developer experience.
4. API Integration: Axios and React Query are used for efficient API calls with caching capabilities.
5. Modern UI Design: Built using TailwindCSS to ensure accessibility and responsiveness.

### Available Scripts

```
pnpm install        – Install project dependencies
pnpm run dev        – Start the development server
pnpm run build      – Build the project for production
```


### Environment Variables
Copy the .env.example file and rename it to .env
Configure environment variables as needed

By default, .env is included in .gitignore, but for this project, it may be committed if necessary.

## State Management

Initially, the application relied on local state since only a few items needed to be managed. However, a refactor introduced React Context API for state persistence across components.

### Considerations:
Some values may be null on the first load due to asynchronous data fetching.
There is a risk of incorrect state interpretation (false values may appear unexpectedly).
If data security is a concern, localStorage is not recommended without encryption (e.g., using a cryptographic package).

### Alternative State Management Options:
While the current implementation uses React Context API, other alternatives include:
`Zustand` – Lightweight and scalable state management
`Redux` – Centralized state management with middleware support
`MobX` – Simple and reactive state management