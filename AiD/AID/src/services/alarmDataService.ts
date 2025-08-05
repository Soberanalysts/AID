/**
 * Alarm/Notification Data Service
 * Provides comprehensive alarm/notification functionality with realistic Korean content
 */

export type NotificationType = 'point' | 'update' | 'system' | 'health' | 'event' | 'general';

export type NotificationCategory = 'today' | 'past';

export interface NotificationData {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  category: NotificationCategory;
}

// Enhanced AlarmData interface for backward compatibility
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

class AlarmDataService {
  private notifications: NotificationData[] = [];

  constructor() {
    this.initializeMockData();
  }

  /**
   * Initialize with realistic Korean notification data
   */
  private initializeMockData(): void {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Today's notifications (more recent)
    const todayNotifications: NotificationData[] = [
      {
        id: '1',
        type: 'point',
        title: '포인트적립',
        message: '[만보기] 8,000걸음을 걸고 15P 적립!',
        timestamp: new Date(today.getTime() + 13 * 60 * 60 * 1000 + 41 * 60 * 1000), // 오후 1:41
        isRead: false,
        category: 'today'
      },
      {
        id: '2',
        type: 'point',
        title: '포인트적립',
        message: '[출석체크] 오늘의 출석체크로 10P 적립!',
        timestamp: new Date(today.getTime() + 9 * 60 * 60 * 1000), // 오전 9:00
        isRead: false,
        category: 'today'
      },
      {
        id: '3',
        type: 'health',
        title: '건강 알림',
        message: '[운동 알림] 오늘 목표 걸음 수 달성을 위해 3,000걸음 더 걸어보세요!',
        timestamp: new Date(today.getTime() + 11 * 60 * 60 * 1000 + 30 * 60 * 1000), // 오전 11:30
        isRead: true,
        category: 'today'
      },
      {
        id: '4',
        type: 'point',
        title: '포인트적립',
        message: '[건강데이터 입력] 혈압 데이터 입력으로 5P 적립!',
        timestamp: new Date(today.getTime() + 14 * 60 * 60 * 1000 + 15 * 60 * 1000), // 오후 2:15
        isRead: false,
        category: 'today'
      },
      {
        id: '5',
        type: 'event',
        title: '이벤트 알림',
        message: '[새로운 챌린지] "30일 걷기 챌린지"가 시작되었어요! 지금 참여하세요.',
        timestamp: new Date(today.getTime() + 10 * 60 * 60 * 1000), // 오전 10:00
        isRead: true,
        category: 'today'
      }
    ];

    // Past week notifications
    const pastNotifications: NotificationData[] = [
      // 1일 전
      {
        id: '6',
        type: 'update',
        title: '업데이트 완료',
        message: '[건강검진데이터]가 업데이트 되었습니다.',
        timestamp: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000), // 1일 전 오후 4시
        isRead: true,
        category: 'past'
      },
      {
        id: '7',
        type: 'point',
        title: '포인트적립',
        message: '[만보기] 12,000걸음을 걸고 20P 적립!',
        timestamp: new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000), // 1일 전 오후 1시
        isRead: true,
        category: 'past'
      },
      // 2일 전
      {
        id: '8',
        type: 'system',
        title: '시스템 알림',
        message: '[서버 점검] 8월 3일 새벽 2시-4시 서버 점검이 예정되어 있습니다.',
        timestamp: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000 + 19 * 60 * 60 * 1000), // 2일 전 오후 7시
        isRead: true,
        category: 'past'
      },
      {
        id: '9',
        type: 'health',
        title: '건강 알림',
        message: '[건강 팁] 규칙적인 수분 섭취가 건강에 도움이 됩니다. 하루 8잔의 물을 마셔보세요!',
        timestamp: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000 + 11 * 60 * 60 * 1000), // 2일 전 오전 11시
        isRead: true,
        category: 'past'
      },
      // 3일 전
      {
        id: '10',
        type: 'point',
        title: '포인트적립',
        message: '[체중 기록] 체중 데이터 입력으로 5P 적립!',
        timestamp: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 3일 전 오전 8시
        isRead: true,
        category: 'past'
      },
      {
        id: '11',
        type: 'event',
        title: '이벤트 알림',
        message: '[특별 이벤트] 건강 데이터 5일 연속 입력시 보너스 50P 지급!',
        timestamp: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000), // 3일 전 오후 3시
        isRead: true,
        category: 'past'
      },
      // 4일 전
      {
        id: '12',
        type: 'update',
        title: '업데이트 완료',
        message: '[앱 업데이트] v2.1.3 업데이트가 완료되었습니다. 새로운 기능을 확인해보세요!',
        timestamp: new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000), // 4일 전 정오
        isRead: true,
        category: 'past'
      },
      {
        id: '13',
        type: 'point',
        title: '포인트적립',
        message: '[만보기] 6,500걸음을 걸고 12P 적립!',
        timestamp: new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000), // 4일 전 오후 5시
        isRead: true,
        category: 'past'
      },
      // 5일 전
      {
        id: '14',
        type: 'health',
        title: '건강 알림',
        message: '[운동 기록] 어제보다 2,000걸음 더 걸었어요! 꾸준한 운동 습관을 유지하세요.',
        timestamp: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000), // 5일 전 오후 8시
        isRead: true,
        category: 'past'
      },
      {
        id: '15',
        type: 'system',
        title: '시스템 알림',
        message: '[개인정보 정책] 개인정보 처리방침이 업데이트되었습니다.',
        timestamp: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000), // 5일 전 오후 2시
        isRead: true,
        category: 'past'
      },
      // 6일 전
      {
        id: '16',
        type: 'point',
        title: '포인트적립',
        message: '[혈당 기록] 혈당 데이터 입력으로 5P 적립!',
        timestamp: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000), // 6일 전 오전 7시
        isRead: true,
        category: 'past'
      },
      {
        id: '17',
        type: 'event',
        title: '이벤트 알림',
        message: '[주간 랭킹] 이번 주 걸음 수 랭킹 5위! 다음 주에는 더 높은 순위에 도전해보세요.',
        timestamp: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000), // 6일 전 오후 9시
        isRead: true,
        category: 'past'
      },
      // 7일 전
      {
        id: '18',
        type: 'point',
        title: '포인트적립',
        message: '[주간 보너스] 7일 연속 로그인 달성! 보너스 30P 적립!',
        timestamp: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000), // 7일 전 오전 9시
        isRead: true,
        category: 'past'
      },
      {
        id: '19',
        type: 'health',
        title: '건강 알림',
        message: '[주간 리포트] 이번 주 평균 8,500걸음 달성! 지난 주보다 15% 증가했어요.',
        timestamp: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000), // 7일 전 오후 6시
        isRead: true,
        category: 'past'
      },
      {
        id: '20',
        type: 'update',
        title: '업데이트 완료',
        message: '[데이터 동기화] 건강 데이터 클라우드 동기화가 완료되었습니다.',
        timestamp: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000 + 22 * 60 * 60 * 1000), // 7일 전 오후 10시
        isRead: true,
        category: 'past'
      }
    ];

    this.notifications = [...todayNotifications, ...pastNotifications];
  }

  /**
   * Get today's notifications (formatted for AlarmPage component)
   */
  getTodayNotifications(): AlarmData[] {
    const todayNotifications = this.notifications
      .filter(notification => notification.category === 'today')
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    return todayNotifications.map(notification => this.convertToAlarmData(notification));
  }

  /**
   * Get past notifications (formatted for AlarmPage component)
   */
  getPastNotifications(): AlarmData[] {
    const pastNotifications = this.notifications
      .filter(notification => notification.category === 'past')
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    return pastNotifications.map(notification => this.convertToAlarmData(notification));
  }

  /**
   * Get all notifications
   */
  getAllNotifications(): NotificationData[] {
    return [...this.notifications].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  /**
   * Get unread notification count
   */
  getUnreadCount(): number {
    return this.notifications.filter(notification => !notification.isRead).length;
  }

  /**
   * Mark notification as read
   */
  markAsRead(notificationId: string): boolean {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.isRead = true;
      return true;
    }
    return false;
  }

  /**
   * Mark all notifications as read
   */
  markAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.isRead = true;
    });
  }

  /**
   * Delete notification
   */
  deleteNotification(notificationId: string): boolean {
    const index = this.notifications.findIndex(n => n.id === notificationId);
    if (index !== -1) {
      this.notifications.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Delete all notifications
   */
  deleteAllNotifications(): void {
    this.notifications = [];
  }

  /**
   * Delete all notifications from a specific category
   */
  deleteNotificationsByCategory(category: NotificationCategory): void {
    this.notifications = this.notifications.filter(n => n.category !== category);
  }

  /**
   * Add new notification
   */
  addNotification(notification: Omit<NotificationData, 'id' | 'timestamp' | 'category'>): string {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isToday = now.getTime() - today.getTime() < 24 * 60 * 60 * 1000;

    const newNotification: NotificationData = {
      ...notification,
      id: Date.now().toString(),
      timestamp: now,
      category: isToday ? 'today' : 'past'
    };

    this.notifications.unshift(newNotification);
    return newNotification.id;
  }

  /**
   * Convert NotificationData to AlarmData for backward compatibility
   */
  private convertToAlarmData(notification: NotificationData): AlarmData {
    return {
      id: notification.id,
      type: notification.type,
      title: notification.title,
      message: notification.message,
      time: this.formatTime(notification.timestamp, notification.category),
      isToday: notification.category === 'today',
      timestamp: notification.timestamp,
      isRead: notification.isRead
    };
  }

  /**
   * Format time for display based on category
   */
  private formatTime(timestamp: Date, category: NotificationCategory): string {
    if (category === 'today') {
      const hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();
      const period = hours < 12 ? '오전' : '오후';
      const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
      
      return `${period} ${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else {
      const month = timestamp.getMonth() + 1;
      const date = timestamp.getDate();
      return `${month}월${date}일`;
    }
  }

  /**
   * Get formatted Korean date string
   */
  private getKoreanDateString(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }

  /**
   * Filter notifications by type
   */
  getNotificationsByType(type: NotificationType): NotificationData[] {
    return this.notifications.filter(notification => notification.type === type);
  }

  /**
   * Get notifications from last N days
   */
  getNotificationsFromLastDays(days: number): NotificationData[] {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return this.notifications
      .filter(notification => notification.timestamp >= cutoffDate)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }
}

// Export singleton instance
export const alarmDataService = new AlarmDataService();

// Export type guards
export const isPointNotification = (notification: NotificationData): boolean => 
  notification.type === 'point';

export const isSystemNotification = (notification: NotificationData): boolean => 
  notification.type === 'system';

export const isHealthNotification = (notification: NotificationData): boolean => 
  notification.type === 'health';

export const isEventNotification = (notification: NotificationData): boolean => 
  notification.type === 'event';

export const isUpdateNotification = (notification: NotificationData): boolean => 
  notification.type === 'update';