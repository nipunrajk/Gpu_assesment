# GPU.NET Dashboard

A modern Web3 GPU marketplace dashboard built with React, TypeScript, and TailwindCSS, featuring RainbowKit wallet integration.

## 🚀 Live Demo

**Hosted URL:** https://gpu-assesment.vercel.app/

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── Dashboard.tsx
│   │   ├── AstraSection.tsx
│   │   ├── GPUGrid.tsx
│   │   ├── GPUCard.tsx
│   │   └── AstraPromo.tsx
│   ├── layout/          # Layout components
│   │   └── MainLayout.tsx
│   ├── navigation/      # Navigation components
│   │   ├── Sidebar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── RightSidebar.tsx
│   ├── ui/             # Base UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── icons/          # Icon components
│       └── NavigationIcons.tsx
├── constants/          # Application constants
│   └── navigation.ts
├── context/           # React Context providers
│   └── WalletContext.tsx
├── config/            # Configuration files
│   └── wagmi.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions
│   └── index.ts
├── App.tsx            # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind config
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS v4
- **Web3 Integration:** RainbowKit + Wagmi
- **Responsive Design:** Mobile-first approach
- **State Management:** React Context API

## 🏗️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gpu-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Implementation

This project implements a pixel-perfect GPU marketplace dashboard with:

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Modern UI:** Clean, dark theme with orange accent colors
- **Web3 Integration:** Wallet connection via RainbowKit
- **Interactive Elements:** Functional buttons, dropdowns, and navigation
- **Performance Optimized:** Lazy loading and optimized renders

### Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** 1024px - 1280px
- **Large Desktop:** > 1280px

## 🔗 Web3 Features

- **Wallet Connection:** RainbowKit integration with major wallets
- **Multi-chain Support:** Ethereum, Polygon, Optimism, Arbitrum, Base
- **Wallet Context:** Global state management for wallet connection
- **Address Display:** Truncated wallet address in UI

## 📱 Mobile Responsiveness

- **Mobile Navigation:** Hamburger menu with slide-out sidebar
- **Adaptive Layouts:** Components adjust for different screen sizes
- **Touch-Friendly:** Optimized button sizes and interactions
- **Responsive Typography:** Text scales appropriately across devices

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```