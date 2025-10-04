# Frontend Developer Assessment

A pixel-perfect implementation of the provided Figma design using React, TypeScript, TailwindCSS, and RainbowKit.

## 🚀 Live Demo

**Hosted URL:** [Coming Soon - Deploy after implementation]

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **TypeScript** - Type Safety
- **TailwindCSS** - Styling
- **RainbowKit** - Wallet Connection
- **Wagmi** - Ethereum React Hooks
- **React Query** - Data Fetching

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components
│   ├── ui/             # Basic UI components
│   └── features/       # Feature-specific components
├── context/            # React Context providers
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Features Implemented

- ✅ Pixel-perfect design implementation
- ✅ Responsive design (desktop & mobile)
- ✅ Wallet connection with RainbowKit
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ React Context for state management
- ✅ Performance optimizations
- ✅ Clean code architecture

## 🧪 State Management

The application uses React Context API and appropriate state management patterns:

- **WalletContext**: Authentication context for wallet connection state management
- **Local useState**: Component-level state for navigation and UI interactions
- **RainbowKit/Wagmi**: Blockchain wallet integration with built-in state management
- **Context Pattern**: Demonstrates proper use of React Context for cross-component state

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🔧 Development Guidelines

- Each component file is kept under 200 lines
- Components are organized by feature and reusability
- TypeScript strict mode enabled
- ESLint configured for code quality
- Performance optimized with React.memo and useMemo where needed

## 🚀 Deployment

This project is configured for easy deployment on:

- Vercel (recommended)
- Netlify
- Any static hosting service

## 📄 License

This project is created for assessment purposes.
