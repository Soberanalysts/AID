// Color constants from Figma design system

export const Colors = {
  // Main colors
  mainBlue1: '#BECDFF',
  mainBlue5: '#2651E8',
  
  // Grayscale colors
  gray8: '#121212',
  gray7: '#222222',
  black: '#000000',
  
  // Additional colors for the UI
  white: '#FFFFFF',
  lightGray: '#F8F8F8',
  mediumGray: '#E5E5E5',
  textGray: '#666666',
  borderGray: '#F0F0F0',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
} as const;

export const Typography = {
  // Font family from Figma
  fontFamily: 'Pretendard',
  
  // Font weights
  weights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  
  // Font sizes
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
  },
  
  // Line heights
  lineHeights: {
    tight: 16,
    base: 20,
    relaxed: 24,
    loose: 30,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  base: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const BorderRadius = {
  sm: 4,
  base: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;