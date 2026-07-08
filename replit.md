# Oxygen Robotics International Platform

## Overview

A full-stack web platform for Oxygen Robotics International, a global youth-led robotics organization. The application serves as the digital presence featuring an "industrial futurism" dark theme design, showcasing chapters across Bangladesh, Pakistan, and Malaysia. The platform includes informational pages (Home, About, Gallery, Panel, International), a contact form system, and is built with a modern React/Express stack designed for easy scaling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled using Vite
- **Routing**: React Router DOM v6 with client-side navigation across 5 main pages (Index, About, Gallery, Panel, International)
- **State Management**: TanStack Query for server state and API data fetching
- **Styling**: Tailwind CSS with CSS variables for theming using a dark "industrial futurism" design system with cyan accent (#00F0FF) on dark backgrounds
- **UI Components**: shadcn/ui component library built on Radix UI primitives, located in `src/components/ui/`
- **Animations**: Framer Motion for page transitions and interactive elements
- **Path Aliases**: `@/*` maps to `./src/*` for clean imports

### Backend Architecture
- **Server**: Express.js v5 running on port 5000
- **API Design**: RESTful endpoints under `/api/` prefix
- **Current Endpoints**: `POST /api/contact` for contact form submissions
- **Storage Pattern**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`) - designed to be easily swapped with database implementation
- **Validation**: Zod schemas with Drizzle-Zod integration for type-safe request validation

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL schema definitions prepared for future database connection
- **Schema Location**: `shared/schema.ts` contains types shared between frontend and backend
- **Current Models**: Messages table (id, name, email, message)
- **Database Ready**: Schema prepared for PostgreSQL via Neon serverless driver, currently using in-memory storage

### Build and Development
- **Development Server**: `npm run dev` runs the Vite dev server only (frontend, HMR, port 5000). The Express API (`/api/contact`) is not active in this mode — that matches the original Vercel serverless split, where `server/index.ts` is deployed separately.
- **Production Build**: `npm run build` builds the static frontend with Vite, type-checks with `tsc`, and bundles `server/index.ts` into `dist/index.js` (ESM) with esbuild.
- **Production Run (Replit deployment)**: `node ./dist/index.js` starts the bundled Express server, which serves the built frontend from `dist/` and handles `/api/*` routes.
- **Deployment**: Replit's `.replit` autoscale deployment runs the built Express server above. The repo is also configured for Vercel with serverless API functions via `vercel.json`.

## External Dependencies

### Third-Party Services
- **Neon Database**: PostgreSQL serverless driver (`@neondatabase/serverless`) prepared but not yet connected - will need `DATABASE_URL` environment variable when activated
- **Google Fonts**: JetBrains Mono font loaded from Google Fonts CDN

### UI Libraries
- **Radix UI**: Full suite of accessible primitive components (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component library layered on Radix primitives
- **Framer Motion**: Animation library for page transitions
- **Lucide React**: Icon library

### Form and Validation
- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation for both frontend and backend
- **Drizzle-Zod**: Generates Zod schemas from Drizzle table definitions

### Deployment
- **Vercel**: Configured via `vercel.json` for static frontend hosting and serverless API functions