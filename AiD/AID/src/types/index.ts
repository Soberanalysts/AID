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

// Point-related interfaces
export interface PointTransaction {
  id: string;
  type: string;
  description: string;
  date: string;
  amount: number;
  isEarned: boolean; // true for earned (+), false for spent (-)
}

export interface PointData {
  availablePoints: number;
  retailPoints: number;
  transactions: PointTransaction[];
}

// Alarm/Notification interfaces
export type NotificationType = 'point' | 'update' | 'system' | 'health' | 'event' | 'general';

export interface AlarmData {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isToday?: boolean;
  timestamp?: Date;
  isRead?: boolean;
}