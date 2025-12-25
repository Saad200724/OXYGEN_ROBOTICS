# Global Youth Robotics Movement

A fullstack web application built with React, TypeScript, Vite, Express, and Tailwind CSS.

## Project Overview

Building a Global Youth Robotics Movement - uniting the brightest young minds across borders to design, solve, and lead through robotics and AI.

## Features

- Modern, responsive UI with shadcn components
- TypeScript for type safety
- React Router for navigation
- TanStack Query for data fetching
- Tailwind CSS for styling
- Dark mode support

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Tools**: shadcn-ui, React Hook Form, TanStack Query
- **Styling**: Tailwind CSS with dark mode support

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utility functions
│   │   └── App.tsx      # Main app component
│   └── public/          # Static assets
├── server/              # Backend Express server
│   └── index.ts         # Server entry point
├── shared/              # Shared types and schemas
│   └── schema.ts        # Data schemas
└── package.json         # Dependencies and scripts
```

## Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - About the movement
- **International** (`/international`) - International programs
- **Gallery** (`/gallery`) - Gallery of events and projects
- **Panel** (`/panel`) - Panel information

## Development Guidelines

This project follows modern web development best practices:

- Component-based architecture
- Type-safe code with TypeScript
- Responsive design with Tailwind CSS
- Accessible UI components from shadcn
- Client-side state management with React hooks
- Server-side data management with Express

## License

MIT
