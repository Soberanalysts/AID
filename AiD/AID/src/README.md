# AiD App Source Code Structure

This directory contains the main source code for the AiD React Native application.

## Directory Structure

```
src/
├── components/          # React Native components
│   ├── MainPage.tsx    # Main page component based on Figma design
│   └── index.ts        # Component exports
├── constants/          # App constants and design system
│   └── colors.ts       # Colors, typography, spacing constants
├── types/              # TypeScript type definitions
│   └── index.ts        # Type exports
└── index.ts            # Main src exports
```

## Components

### MainPage
The main page component that implements the design from Figma. Features:
- Header with profile and notifications
- Banner section
- Navigation tabs
- Content sections with horizontal scrolling
- User recommendations
- Article feed
- Bottom navigation

## Design System

The app uses a consistent design system defined in `constants/colors.ts`:
- Colors from Figma design tokens
- Typography scale using Pretendard font
- Consistent spacing and border radius values

## Types

TypeScript interfaces for:
- User profiles
- Content cards
- Articles and engagement data
- Navigation elements

## Usage

Import components using the barrel exports:

```typescript
import { MainPage } from './src';
```

The design closely follows the Figma specifications with proper React Native implementation.