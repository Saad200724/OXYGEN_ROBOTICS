# Oxygen Robotics International Platform

## Overview

A full-stack web platform for the Global Youth Robotics Movement (Oxygen Robotics International). The application serves as the digital presence for a youth-led robotics organization with chapters in Bangladesh, Pakistan, and Malaysia. It features an interactive showcase website with pages for About, Gallery, International chapter information, and a Panel for chapter management, along with a backend API for contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled using Vite
- **Routing**: React Router DOM v6 for client-side navigation
- **State Management**: TanStack Query (React Query) for server state and data fetching
- **Styling**: Tailwind CSS with CSS variables for theming, using a dark "industrial futurism" design system
- **UI Components**: shadcn/ui component library (Radix UI primitives) with custom styling
- **Animations**: Framer Motion for page transitions and interactive elements
- **Design System**: Custom Oxygen Robotics theme with cyan accent color (#00F0FF) on dark backgrounds

### Backend Architecture
- **Server**: Express.js (v5) running on port 5000
- **API Design**: RESTful endpoints under `/api/` prefix
- **Current Endpoints**: POST `/api/contact` for contact form submissions
- **Storage**: In-memory storage (MemStorage class) - designed to be swappable with database implementation
- **Schema Validation**: Zod schemas with Drizzle-Zod integration for type-safe validation

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL schema definitions
- **Schema Location**: `shared/schema.ts` contains shared types between frontend and backend
- **Current Models**: Messages table (id, name, email, message)
- **Note**: Database connection is prepared for PostgreSQL via Neon serverless driver but currently uses in-memory storage

### Project Structure
```
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   │   └── ui/            # shadcn/ui component library
│   ├── pages/             # Route pages (Index, About, Gallery, Panel, International)
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   └── storage.ts         # Data storage abstraction
├── shared/                 # Shared TypeScript schemas
│   └── schema.ts          # Drizzle ORM schema definitions
└── public/                 # Static assets
```

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## External Dependencies

### Third-Party Services
- **Neon Database**: PostgreSQL serverless driver (`@neondatabase/serverless`) - prepared but not actively connected
- **Vercel**: Deployment configuration in `vercel.json` for serverless deployment
- **Google Fonts**: JetBrains Mono for monospace typography, Inter for body text

### Key NPM Packages
- **UI Framework**: Full shadcn/ui component set (Radix UI primitives)
- **Forms**: React Hook Form with Zod resolver for validation
- **Data Fetching**: TanStack Query v5
- **Styling**: Tailwind CSS, class-variance-authority, clsx, tailwind-merge
- **Animations**: Framer Motion
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React

### Development Tools
- **Build**: Vite with React SWC plugin
- **TypeScript**: Configured for both browser (tsconfig.app.json) and Node (tsconfig.node.json)
- **Linting**: ESLint with TypeScript and React hooks plugins
- **Component Tagging**: lovable-tagger (development mode only)