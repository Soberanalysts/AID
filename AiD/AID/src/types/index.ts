// Type definitions for the AiD app

export interface User {
  id: string;
  name: string;
  avatar?: string;
  subtitle?: string;
  followerCount?: number;
}

export interface ContentCard {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  category?: string;
  date?: string;
  engagement?: Engagement;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  image?: string;
  engagement: Engagement;
}

export interface Engagement {
  likes: number;
  comments: number;
  shares: number;
}

export interface NavigationTab {
  id: string;
  label: string;
  isActive?: boolean;
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
}