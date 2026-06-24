# BoardVerse Client

BoardVerse is a social platform for board game enthusiasts. Users can browse a game catalog, log their plays, write posts, follow hashtags/categories, and manage their profile. This repository contains the frontend client.

## Tech Stack

- [React 19](https://react.dev/) with the React Compiler enabled
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for development and bundling
- [TanStack Router](https://tanstack.com/router) for routing
- [TanStack Query](https://tanstack.com/query) for server state management
- [Zustand](https://github.com/pmndrs/zustand) for client state management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [react-markdown](https://github.com/remarkjs/react-markdown) for rendering markdown content

## Project Structure

```
src/
├── api/         # API request functions (auth, games, posts, game logs, profile, categories)
├── components/  # Reusable UI components (Post, GameCard, GameLog, Modal, etc.)
├── hooks/       # Custom React hooks
├── layout/      # Layout components (Navbar, Sidebar, MainLayout, AuthLayout)
├── lib/         # Shared utilities
├── pages/       # Route pages (Home, Login, Register, Profile, GameList, GameDetail, Hashtag)
├── store/       # Zustand stores (auth, ui)
└── types/       # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Type-checks the project and produces a production build in `dist/`. The build uses `VITE_API_URL=/api` by default.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Environment Variables

| Variable       | Description                  |
|----------------|-------------------------------|
| `VITE_API_URL` | Base URL for the backend API |

## License

This project currently has no license specified.
