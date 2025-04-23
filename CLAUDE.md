# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `pnpm dev`: Run development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint

## Code Style
- **Imports**: Use named imports; group by external, then internal (@/ paths)
- **Types**: Use TypeScript with strict mode; explicit return types on exported functions
- **Naming**: camelCase for variables/functions, PascalCase for components/interfaces
- **Components**: Use functional components with React.forwardRef when needed
- **CSS**: Use Tailwind with cn() utility for class merging; follow class-variance-authority patterns
- **Error Handling**: Use try/catch blocks with specific error types
- **Hooks**: Custom hooks use 'use' prefix and follow React Hooks rules
- **Props**: Define interfaces for component props; use React.HTMLAttributes for native elements