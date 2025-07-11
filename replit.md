# Portfolio Website Project

## Overview

This is a modern, dark-themed personal portfolio website for Samsul Jahith S, a Data Analyst transitioning to AI. The application is built as a full-stack TypeScript project using React for the frontend and Express.js for the backend, with a PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Storage**: PostgreSQL-based session store
- **Development**: tsx for TypeScript execution

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common types and schemas
- `migrations/` - Database migration files

## Key Components

### Frontend Components
1. **Portfolio.tsx** - Main portfolio page component
2. **ParticleBackground.tsx** - Animated particle background for hero section
3. **ScrollReveal.tsx** - Intersection Observer-based scroll animations
4. **UI Components** - Complete shadcn/ui component library

### Backend Components
1. **Express Server** - Main application server with middleware
2. **Storage Interface** - Abstraction layer for data operations
3. **Route Registration** - Centralized API route management

### Database Schema
- **Users Table**: Basic user authentication structure
- **PostgreSQL**: Primary database with Neon serverless connection

## Data Flow

1. **Frontend Requests**: React components use TanStack Query for API calls
2. **API Routes**: Express routes handle business logic under `/api` prefix
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Standardized JSON responses with error handling

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **Lucide React**: Icon library
- **Google Fonts**: Inter and JetBrains Mono fonts

### Development Tools
- **Vite**: Frontend build tool and dev server
- **ESBuild**: Backend bundling for production
- **TypeScript**: Type safety across the stack

### Database and Backend
- **@neondatabase/serverless**: PostgreSQL connection
- **Drizzle Kit**: Database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store

### Animation and Interaction
- **Embla Carousel**: Touch-friendly carousel component
- **Class Variance Authority**: Component variant management
- **CLSX/Tailwind Merge**: Conditional class handling

## Deployment Strategy

### Development
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations via `drizzle-kit push`

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Single Node.js process serves both static files and API

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Replit-specific plugins for development environment
- CORS and security middleware for production deployment

### Database Management
- Drizzle migrations stored in `./migrations`
- Schema definitions in `shared/schema.ts`
- PostgreSQL dialect with URL-based connection

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository for frontend and backend reduces complexity and improves code sharing
2. **TypeScript Throughout**: End-to-end type safety from database to UI components
3. **Component Library**: shadcn/ui provides consistent, accessible UI components
4. **Query Management**: TanStack Query handles caching, synchronization, and error states
5. **Database Strategy**: Drizzle ORM provides type-safe database operations with migration support