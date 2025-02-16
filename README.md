# Swissborg

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

Before running frontend app please run backend.

After cloning the repo, run `pnpm install` to install all dependencies.
To run App run `pnpm run dev`.

There is two solutions in different branches:
- `main` with local storage
- `feat-context-implementation` with context - more details about context at the bottom of this file.

I used multiple popular libraries that have awesome community support for React:

- vite (to serve the app)
- axios (as http client)
- React Query (to manage data fetching)
- tailwindcss (UI library)
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

### End
Also feel free to checkout on `feat-context-implementation` where I made implementation using Context API. I love using context or Zustand but for this specific issue we don't have to use as it's just three items to be stored. Prons of using that stored in context is that React can faster consume it and compare types but if we have it there or in localStorage and our backend don't provide us new values of EUR we will have always old value of EUR.
