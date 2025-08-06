import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/colors';
import { AlarmData } from '../types';

interface AlarmItemProps {
  data: AlarmData;
  onDelete?: (id: string) => void;
  onPress?: (id: string) => void;
}

const AlarmItem: React.FC<AlarmItemProps> = ({ 
  data, 
  onDelete, 
  onPress 
}) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleItemPress = () => {
    setShowDeleteButton(!showDeleteButton);
    onPress?.(data.id);
  };

  const handleDelete = () => {
    onDelete?.(data.id);
    setShowDeleteButton(false);
  };
  const getIconContent = () => {
    switch (data.type) {
      case 'point':
        return (
          <View style={styles.pointIcon}>
            <View style={styles.pointIconBorder}>
              <Text style={styles.pointIconText}>P</Text>
            </View>
          </View>
        );
      case 'update':
        return (
          <View style={styles.updateIcon}>
            <Text style={styles.updateIconText}>✓</Text>
          </View>
        );
      case 'system':
        return (
          <View style={styles.systemIcon}>
            <Text style={styles.systemIconText}>⚙</Text>
          </View>
        );
      case 'health':
        return (
          <View style={styles.healthIcon}>
            <Text style={styles.healthIconText}>❤</Text>
          </View>
        );
      case 'event':
        return (
          <View style={styles.eventIcon}>
            <Text style={styles.eventIconText}>🎉</Text>
          </View>
        );
      default:
        return (
          <View style={styles.generalIcon}>
            <Text style={styles.generalIconText}>📢</Text>
          </View>
        );
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.content} 
        onPress={handleItemPress}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          {getIconContent()}
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.time}>{data.time}</Text>
          </View>
          <Text style={styles.message}>{data.message}</Text>
        </View>
      </TouchableOpacity>

      {showDeleteButton && (
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={handleDelete}
          activeOpacity={0.7}
        >
          <View style={styles.deleteIconContainer}>
            <Text style={styles.deleteIcon}>🗑️</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    minHeight: 79,
  },
  iconContainer: {
    marginRight: Spacing.lg,
  },
  pointIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointIconBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.mainBlue5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  pointIconText: {
    fontFamily: Typography.fontFamily,
    fontSize: 9,
    fontWeight: Typography.weights.bold as any,
    color: Colors.mainBlue5,
    textAlign: 'center',
  },
  updateIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.mainBlue5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateIconText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: Typography.weights.bold as any,
  },
  systemIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemIconText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: Typography.weights.bold as any,
  },
  healthIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthIconText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: Typography.weights.bold as any,
  },
  eventIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#9C27B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventIconText: {
    fontSize: 10,
    color: Colors.white,
    fontWeight: Typography.weights.bold as any,
  },
  generalIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#757575',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalIconText: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: Typography.weights.bold as any,
  },
  textContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold as any,
    color: '#343434',
    marginRight: Spacing.lg,
  },
  time: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.regular as any,
    color: '#343434',
    marginLeft: 'auto',
  },
  message: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.regular as any,
    color: '#343434',
    lineHeight: Typography.lineHeights.base,
  },
  deleteButton: {
    backgroundColor: '#dc0000',
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: BorderRadius.lg,
    borderBottomRightRadius: BorderRadius.lg,
  },
  deleteIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default AlarmItem;