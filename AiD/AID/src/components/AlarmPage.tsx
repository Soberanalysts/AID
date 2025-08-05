import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  Alert 
} from 'react-native';
import { Colors, Typography, Spacing } from '../constants/colors';
import { AlarmData } from '../types';
import AlarmItem from './AlarmItem';
import { alarmDataService } from '../services/alarmDataService';

interface AlarmPageProps {
  onGoBack?: () => void;
  onDeleteAll?: () => void;
}

const AlarmPage: React.FC<AlarmPageProps> = ({ onGoBack, onDeleteAll }) => {
  const [todayAlarms, setTodayAlarms] = useState<AlarmData[]>([]);
  const [pastAlarms, setPastAlarms] = useState<AlarmData[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  // Load alarm data from service
  useEffect(() => {
    loadAlarmData();
  }, []);

  const loadAlarmData = () => {
    setTodayAlarms(alarmDataService.getTodayNotifications());
    setPastAlarms(alarmDataService.getPastNotifications());
    setUnreadCount(alarmDataService.getUnreadCount());
  };

  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);

  const handleDeleteItem = (id: string) => {
    setDeletingItemId(id);
    
    // Delete from service
    const success = alarmDataService.deleteNotification(id);
    
    if (success) {
      // Reload data from service
      loadAlarmData();
    }
    
    setTimeout(() => {
      setDeletingItemId(null);
    }, 300);
  };

  const handleDeleteAll = () => {
    Alert.alert(
      '모든 알림 삭제',
      '모든 알림을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          style: 'destructive',
          onPress: () => {
            // Delete all notifications from service
            alarmDataService.deleteAllNotifications();
            
            // Reload data from service
            loadAlarmData();
            
            if (onDeleteAll) {
              onDeleteAll();
            }
          },
        },
      ]
    );
  };

  const handleItemPress = (item: AlarmData) => {
    // Mark notification as read when tapped
    if (!item.isRead) {
      alarmDataService.markAsRead(item.id);
      loadAlarmData();
    }
  };

  const renderAlarmItem = (item: AlarmData, showDelete: boolean = false) => (
    <AlarmItem
      key={item.id}
      data={item}
      onDelete={handleDeleteItem}
      showDeleteAction={showDelete && deletingItemId === item.id}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={onGoBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>알림</Text>
          
          <TouchableOpacity 
            style={styles.deleteAllButton}
            onPress={handleDeleteAll}
            activeOpacity={0.7}
          >
            <Text style={styles.deleteAllIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.headerDivider} />
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Today's Notifications */}
          {todayAlarms.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>오늘알림</Text>
              {todayAlarms.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleItemPress(item)}
                  onLongPress={() => setDeletingItemId(item.id)}
                  activeOpacity={0.95}
                >
                  {renderAlarmItem(item, true)}
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Past Notifications */}
          {pastAlarms.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>지난알림</Text>
              {pastAlarms.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleItemPress(item)}
                  activeOpacity={0.95}
                >
                  {renderAlarmItem(item, false)}
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Empty State */}
          {todayAlarms.length === 0 && pastAlarms.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>알림이 없습니다</Text>
            </View>
          )}

          {/* Footer Message */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              7일전 알림까지 확인할 수 있어요 :D
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.white,
    paddingTop: Spacing.sm,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.lg,
    height: 58,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 32,
    color: Colors.gray8,
    fontWeight: Typography.weights.medium as any,
    marginTop: -2,
  },
  headerTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold as any,
    color: Colors.gray8,
    textAlign: 'center',
  },
  deleteAllButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteAllIcon: {
    fontSize: 20,
    color: Colors.mainBlue5,
  },
  headerDivider: {
    height: 1,
    backgroundColor: Colors.borderGray,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  content: {
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxxl,
  },
  section: {
    marginBottom: Spacing.xxxl,
  },
  sectionTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold as any,
    color: Colors.black,
    marginLeft: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xxxl * 2,
  },
  emptyStateText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.base,
    color: Colors.textGray,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xxxl,
    paddingHorizontal: Spacing.xl,
  },
  footerText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    color: Colors.black,
    textAlign: 'center',
  },
});

export default AlarmPage;