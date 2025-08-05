/**
 * Alarm/Notification Utility Functions
 * Helper functions for working with the alarm data service
 */

import { alarmDataService, NotificationData } from '../services/alarmDataService';

/**
 * Add a new notification (helper function for other components)
 */
export const addNewNotification = (
  type: 'point' | 'update' | 'system' | 'health' | 'event',
  title: string,
  message: string,
  isRead: boolean = false
): string => {
  return alarmDataService.addNotification({
    type,
    title,
    message,
    isRead
  });
};

/**
 * Create point notification for step achievements
 */
export const createStepRewardNotification = (steps: number, points: number): string => {
  return addNewNotification(
    'point',
    '포인트적립',
    `[만보기] ${steps.toLocaleString()}걸음을 걸고 ${points}P 적립!`,
    false
  );
};

/**
 * Create check-in notification
 */
export const createCheckInNotification = (points: number): string => {
  return addNewNotification(
    'point',
    '포인트적립',
    `[출석체크] 오늘의 출석체크로 ${points}P 적립!`,
    false
  );
};

/**
 * Create health data input notification
 */
export const createHealthDataNotification = (dataType: string, points: number): string => {
  return addNewNotification(
    'point',
    '포인트적립',
    `[${dataType} 기록] ${dataType} 데이터 입력으로 ${points}P 적립!`,
    false
  );
};

/**
 * Create system update notification
 */
export const createSystemUpdateNotification = (updateType: string): string => {
  return addNewNotification(
    'update',
    '업데이트 완료',
    `[${updateType}]가 업데이트 되었습니다.`,
    false
  );
};

/**
 * Create health reminder notification
 */
export const createHealthReminderNotification = (message: string): string => {
  return addNewNotification(
    'health',
    '건강 알림',
    `[건강 알림] ${message}`,
    false
  );
};

/**
 * Create event notification
 */
export const createEventNotification = (eventName: string, description: string): string => {
  return addNewNotification(
    'event',
    '이벤트 알림',
    `[${eventName}] ${description}`,
    false
  );
};

/**
 * Create system maintenance notification
 */
export const createMaintenanceNotification = (date: string, time: string): string => {
  return addNewNotification(
    'system',
    '시스템 알림',
    `[서버 점검] ${date} ${time} 서버 점검이 예정되어 있습니다.`,
    false
  );
};

/**
 * Get notification counts by type
 */
export const getNotificationCounts = () => {
  const allNotifications = alarmDataService.getAllNotifications();
  
  return {
    total: allNotifications.length,
    unread: alarmDataService.getUnreadCount(),
    today: alarmDataService.getTodayNotifications().length,
    past: alarmDataService.getPastNotifications().length,
    byType: {
      point: alarmDataService.getNotificationsByType('point').length,
      update: alarmDataService.getNotificationsByType('update').length,
      system: alarmDataService.getNotificationsByType('system').length,
      health: alarmDataService.getNotificationsByType('health').length,
      event: alarmDataService.getNotificationsByType('event').length,
    }
  };
};

/**
 * Get recent notifications (last 3 days)
 */
export const getRecentNotifications = (): NotificationData[] => {
  return alarmDataService.getNotificationsFromLastDays(3);
};

/**
 * Format notification time for display
 */
export const formatNotificationTime = (timestamp: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const notificationDate = new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate());
  
  if (notificationDate.getTime() === today.getTime()) {
    // Today - show time
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const period = hours < 12 ? '오전' : '오후';
    const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    
    return `${period} ${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  } else {
    // Past date - show date
    const month = timestamp.getMonth() + 1;
    const date = timestamp.getDate();
    return `${month}월${date}일`;
  }
};

/**
 * Check if notification is from today
 */
export const isNotificationFromToday = (timestamp: Date): boolean => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const notificationDate = new Date(timestamp.getFullYear(), timestamp.getMonth(), timestamp.getDate());
  
  return notificationDate.getTime() === today.getTime();
};

export default {
  addNewNotification,
  createStepRewardNotification,
  createCheckInNotification,
  createHealthDataNotification,
  createSystemUpdateNotification,
  createHealthReminderNotification,
  createEventNotification,
  createMaintenanceNotification,
  getNotificationCounts,
  getRecentNotifications,
  formatNotificationTime,
  isNotificationFromToday,
};