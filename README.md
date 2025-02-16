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