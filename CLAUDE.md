# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (serves on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Goals

**Design is the top priority** - The main objective is to recreate this portfolio with a more sober and modern design aesthetic. Focus on clean, minimalist layouts and contemporary design patterns.

## Architecture Overview

This is a Next.js 13 portfolio application using the App Router architecture with the following structure:

### Directory Structure
- `app/` - Next.js 13 app directory containing pages, layouts, and route handlers
- `src/components/` - Reusable React components organized by feature:
  - `animations/` - Animation components (e.g., BookAnimation)
  - `footer/` - Footer components
  - `form/` - Form-related components
  - `header/` - Header/navigation components
  - `main/` - Main layout components
  - `presentation/` - Presentation/about components
  - `project/` - Project showcase components (includes projectSlider)
  - `query-hooks/` - Custom React Query hooks

### Tech Stack
- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS with Material Tailwind components
- **State Management**: React Query for server state
- **Animation**: Framer Motion
- **Icons**: React Icons
- **HTTP Client**: Axios

### Key Configuration
- Uses Material Tailwind's `withMT` wrapper for Tailwind config
- Custom font families configured via CSS variables (Roboto Mono, Cantarell, Delicious Handrawn, Kanit)
- Dark mode support enabled with class-based toggle
- Remote image patterns configured for img.shields.io badges

### Component Patterns
- Components use `.jsx` extension
- Imports use absolute paths with `@/` alias pointing to project root
- Main page structure uses BookAnimation wrapper containing Presentation and ProjectPrez components
- React Query is wrapped at the root level via ReactQueryWrapper component

### Development Notes
- The app uses experimental App Router features
- Font optimization handled through next/font
- Image optimization configured for remote shield badges

## Debug and Design Rules

- **Always use Playwright MCP** for debugging the live page and visualizing the design. Use Playwright tools to take screenshots, navigate the site, and verify design implementations before and after making changes.