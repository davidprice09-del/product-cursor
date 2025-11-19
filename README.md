# Product Platform

A Next.js application for managing products with tabs for Acceptance, Account, Acquiring, and Addons.

## Features

- Product listing and management
- Tabbed navigation (Acceptance, Account, Acquiring, Addons)
- Search and filtering capabilities
- Responsive design with Tailwind CSS
- Built with Next.js 14 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── products/       # Products pages
│   └── page.tsx        # Home page (redirects to /products)
├── components/         # React components
│   ├── ui/            # UI components (shadcn/ui)
│   ├── ProductCard.tsx
│   └── Sidebar.tsx
└── lib/               # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

