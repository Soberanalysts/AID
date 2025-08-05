# Alarm Data Service

A comprehensive alarm/notification data service with realistic Korean content for the AiD (AI Doctor) application.

## Features

- **Rich Notification Types**: Support for 6 different notification types (point, update, system, health, event, general)
- **Realistic Korean Content**: 20+ realistic Korean notification messages
- **Time Management**: Proper handling of today's vs. past notifications (up to 7 days)
- **Read Status Tracking**: Track read/unread status of notifications
- **Comprehensive API**: Full CRUD operations and utility functions

## Notification Types

| Type | Description | Icon | Color |
|------|-------------|------|--------|
| `point` | 포인트적립 (Point Accumulation) | P | Blue |
| `update` | 업데이트 완료 (Update Complete) | ✓ | Blue |
| `system` | 시스템 알림 (System Notification) | ⚙ | Orange |
| `health` | 건강 알림 (Health Reminder) | ❤ | Green |
| `event` | 이벤트 알림 (Event Notification) | 🎉 | Purple |
| `general` | 일반 알림 (General Notification) | 📢 | Gray |

## Basic Usage

### Import the Service

```typescript
import { alarmDataService } from '../services/alarmDataService';
```

### Get Notifications

```typescript
// Get today's notifications (formatted for AlarmPage)
const todayAlarms = alarmDataService.getTodayNotifications();

// Get past notifications (formatted for AlarmPage)
const pastAlarms = alarmDataService.getPastNotifications();

// Get all notifications (raw NotificationData format)
const allNotifications = alarmDataService.getAllNotifications();
```

### Manage Notifications

```typescript
// Mark as read
alarmDataService.markAsRead(notificationId);

// Mark all as read
alarmDataService.markAllAsRead();

// Delete notification
alarmDataService.deleteNotification(notificationId);

// Delete all notifications
alarmDataService.deleteAllNotifications();

// Get unread count
const unreadCount = alarmDataService.getUnreadCount();
```

### Add New Notifications

```typescript
// Add new notification
const notificationId = alarmDataService.addNotification({
  type: 'point',
  title: '포인트적립',
  message: '[만보기] 5,000걸음을 걸고 10P 적립!',
  isRead: false
});
```

## Advanced Usage with Utilities

For common notification patterns, use the utility functions:

```typescript
import alarmUtils from '../utils/alarmUtils';

// Create step reward notification
alarmUtils.createStepRewardNotification(8000, 15);

// Create check-in notification
alarmUtils.createCheckInNotification(10);

// Create health data notification
alarmUtils.createHealthDataNotification('혈압', 5);

// Get notification counts
const counts = alarmUtils.getNotificationCounts();
console.log(`Total: ${counts.total}, Unread: ${counts.unread}`);
```

## Sample Korean Notifications

The service includes realistic Korean notifications such as:

- `[만보기] 8,000걸음을 걸고 15P 적립!`
- `[출석체크] 오늘의 출석체크로 10P 적립!`
- `[건강검진데이터]가 업데이트 되었습니다.`
- `[운동 알림] 오늘 목표 걸음 수 달성을 위해 3,000걸음 더 걸어보세요!`
- `[새로운 챌린지] "30일 걷기 챌린지"가 시작되었어요! 지금 참여하세요.`
- `[서버 점검] 8월 3일 새벽 2시-4시 서버 점검이 예정되어 있습니다.`

## Integration with Components

### AlarmPage Component

The AlarmPage component automatically loads data from the service:

```typescript
// Data loading happens automatically
useEffect(() => {
  loadAlarmData();
}, []);

const loadAlarmData = () => {
  setTodayAlarms(alarmDataService.getTodayNotifications());
  setPastAlarms(alarmDataService.getPastNotifications());
  setUnreadCount(alarmDataService.getUnreadCount());
};
```

### AlarmItem Component

Enhanced to support all notification types with appropriate icons and colors.

## Data Structure

### NotificationData Interface

```typescript
interface NotificationData {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  category: NotificationCategory;
}
```

### AlarmData Interface (Backward Compatible)

```typescript
interface AlarmData {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isToday?: boolean;
  timestamp?: Date;
  isRead?: boolean;
}
```

## Time Formatting

- **Today's notifications**: `오후 02:15` format
- **Past notifications**: `8월3일` format
- **Automatic categorization**: Based on timestamp vs. current date

## Mock Data

The service includes 20 pre-loaded realistic notifications:
- 5 today's notifications (various times)
- 15 past notifications (distributed over 7 days)
- Mixed notification types and read statuses
- Realistic Korean health/fitness content

This provides a rich development environment without needing a backend service.