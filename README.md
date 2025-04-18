# Wallet App

![App Screenshot](https://github.com/user-attachments/assets/af5c1dd2-b285-4b0b-880b-34ed134da08b)

## Project Description

Wallet App is a modern web application for financial management, built using Next.js 15, React 19, TypeScript, and Tailwind CSS. The application provides users with a convenient interface for viewing credit card information, transaction history, and managing finances.

### Main Features

- Display of credit card balance and limit
- Transaction history viewing
- Detailed information about each transaction
- Bonus points accrual system
- Upcoming payment reminders

## Technologies

- **Next.js 15**: React framework with server-side rendering
- **React 19**: Library for building user interfaces
- **TypeScript**: Typed JavaScript for improved code reliability
- **Tailwind CSS 4**: Utility-first CSS framework
- **FontAwesome**: Icon library
- **Date-fns**: Modern library for working with dates

## Project Structure

```
src/
├── app/                    # Next.js application directory
│   ├── layout.tsx          # General application template
│   ├── page.tsx            # Home page
│   └── transaction/[id]/   # Transaction details page
├── components/             # React components
│   ├── CardBalanceBlock.tsx    # Component with card balance information
│   └── ...
├── data/                   # Application data
│   └── data.json           # Mock data for demonstration
├── hooks/                  # React hooks
│   └── useTransactionData.ts   # Hook for working with transaction data
├── types/                  # TypeScript types
└── utils/                  # Helper utilities
```

## Getting Started

### Requirements

- Node.js 20.x or newer
- pnpm 8.x or newer (recommended)

### Installation

1. Clone the repository:

```bash
git clone repo
cd wallet-app
```

2. Install dependencies:

```bash
pnpm install
```

### Running in Development Mode

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
pnpm build
```

### Running Production Version

```bash
pnpm start
```

## Implementation Features

- **Animations**: ContentAnimator and ContentFadeIn components provide smooth content loading animations
- **Responsive Design**: The application displays correctly on various devices
- **API Simulation**: Using delay to simulate loading data from the server
- **Component Approach**: Modular architecture for easy maintenance and expansion
- **Skeleton Loading**: Improved UX using SkeletonLoader to display the loading process

## Future Development

- Adding user authentication
- Ability to add and edit transactions
- Integration with real payment systems
- Expense graphs and statistics
- Mobile application
