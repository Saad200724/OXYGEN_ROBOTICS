# Global Youth Robotics Movement

A full-stack platform for the Global Youth Robotics Movement, featuring an interactive frontend and a robust backend for community engagement and international collaboration.

## 🚀 Features

- **Interactive Globe**: Visualize the global reach of the movement.
- **Partner Showcase**: Highlighting key collaborations with organizations like Oxygen, BBA, Kip, and Orwa.
- **International Portal**: Dedicated space for global participation.
- **Community Panel**: Centralized management for movement updates.
- **Contact Integration**: Backend API for secure communication.

## 🛠️ Technology Stack

### Frontend
- **Framework**: React with Vite
- **Styling**: Tailwind CSS & shadcn/ui
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Data Fetching**: TanStack Query (React Query)

### Backend
- **Server**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Configured for Vercel and Replit

## 📦 Project Structure

```text
├── src/                # Frontend source code
│   ├── components/     # UI components & sections
│   ├── pages/          # Application pages (Index, About, Gallery, etc.)
│   └── hooks/          # Custom React hooks
├── server/             # Backend Express server
├── shared/             # Shared TypeScript schemas (Drizzle)
└── public/             # Static assets
```

## 🔧 Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Build for production:
   ```sh
   npm run build
   ```

## 🌐 Deployment

This project is configured for seamless deployment on Replit and Vercel. Ensure your environment variables are configured in your deployment settings.
