import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';

import { Colors, Typography, Spacing, BorderRadius } from '../constants/colors';
import { PointData } from '../types';
import { getPointData } from '../services/pointDataService';

interface PointPageProps {
  onBack: () => void;
  pointData?: PointData; // Made optional since we now have a comprehensive service
}

// Get comprehensive point data from service
const getComprehensivePointData = (): PointData => {
  return getPointData();
};

const PointPage: React.FC<PointPageProps> = ({ 
  onBack, 
  pointData = getComprehensivePointData() 
}) => {
  // Pagination state
  const [visibleItemsCount, setVisibleItemsCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  
  // Animation value for new items
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('ko-KR');
  };

  // Get formatted amount string with sign and color
  const getFormattedAmount = (amount: number, isEarned: boolean) => {
    const sign = isEarned ? '+' : '-';
    return `${sign}${formatNumber(amount)}P`;
  };

  // Handle load more functionality
  const handleLoadMore = () => {
    if (isLoading || visibleItemsCount >= pointData.transactions.length) {
      return;
    }

    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      // Fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0.3,
        duration: 150,
        useNativeDriver: false,
      }).start(() => {
        // Update visible items count
        setVisibleItemsCount(prev => Math.min(prev + 10, pointData.transactions.length));
        
        // Fade in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          setIsLoading(false);
        });
      });
    }, 300);
  };

  // Get visible transactions
  const visibleTransactions = pointData.transactions.slice(0, visibleItemsCount);
  const hasMoreItems = visibleItemsCount < pointData.transactions.length;

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>포인트</Text>
      <View style={styles.headerRight} />
    </View>
  );

  const renderPointBalance = () => (
    <View style={styles.pointBalanceSection}>
      <Text style={styles.availablePointsLabel}>사용 가능한 포인트</Text>
      <Text style={styles.mainPointAmount}>
        {formatNumber(pointData.availablePoints)}P
      </Text>
      
      <View style={styles.retailPointsRow}>
        <View style={styles.retailPointsInfo}>
          <Text style={styles.retailPointsLabel}>
            소매점용 포인트(원할때)
          </Text>
          <Text style={styles.retailPointsAmount}>
            {formatNumber(pointData.retailPoints)}P
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.earnMoreButton}>
        <Text style={styles.earnMoreButtonText}>포인트 더 모으러 가기</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPointHistory = () => (
    <View style={styles.historySection}>
      <Text style={styles.historySectionTitle}>포인트 내역</Text>
      
      <Animated.View style={{ opacity: fadeAnim }}>
        {visibleTransactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionType}>{transaction.type}</Text>
              <View style={styles.transactionMeta}>
                <Text style={styles.transactionDescription} numberOfLines={1}>
                  {transaction.description}
                </Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            </View>
            <Text style={[
              styles.transactionAmount,
              transaction.isEarned ? styles.earnedAmount : styles.spentAmount
            ]}>
              {getFormattedAmount(transaction.amount, transaction.isEarned)}
            </Text>
          </View>
        ))}
      </Animated.View>

      {hasMoreItems && (
        <TouchableOpacity 
          style={[
            styles.moreButton,
            isLoading && styles.moreButtonDisabled
          ]} 
          onPress={handleLoadMore}
          disabled={isLoading}
        >
          <Text style={[
            styles.moreButtonText,
            isLoading && styles.moreButtonTextDisabled
          ]}>
            {isLoading ? '로딩 중...' : '더보기'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderPointBalance()}
        {renderPointHistory()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backIcon: {
    fontSize: 24,
    color: Colors.gray8,
    fontWeight: Typography.weights.medium,
  },
  headerTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semiBold,
    color: Colors.gray8,
    fontFamily: Typography.fontFamily,
  },
  headerRight: {
    width: 40,
  },

  // Point Balance Section Styles
  pointBalanceSection: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xxxl,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  availablePointsLabel: {
    fontSize: Typography.sizes.base,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
    marginBottom: Spacing.sm,
  },
  mainPointAmount: {
    fontSize: 36,
    fontWeight: Typography.weights.bold,
    color: Colors.gray8,
    fontFamily: Typography.fontFamily,
    marginBottom: Spacing.xl,
  },
  retailPointsRow: {
    width: '100%',
    marginBottom: Spacing.xxxl,
  },
  retailPointsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.base,
  },
  retailPointsLabel: {
    fontSize: Typography.sizes.sm,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
    flex: 1,
  },
  retailPointsAmount: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semiBold,
    color: Colors.gray8,
    fontFamily: Typography.fontFamily,
  },
  earnMoreButton: {
    backgroundColor: Colors.black,
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.base,
    width: '100%',
  },
  earnMoreButtonText: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: Colors.white,
    fontFamily: Typography.fontFamily,
    textAlign: 'center',
  },

  // Point History Section Styles
  historySection: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxxl,
    borderTopWidth: 8,
    borderTopColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  historySectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semiBold,
    color: Colors.gray8,
    fontFamily: Typography.fontFamily,
    marginBottom: Spacing.xl,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  transactionInfo: {
    flex: 1,
    marginRight: Spacing.base,
  },
  transactionType: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: Colors.gray8,
    fontFamily: Typography.fontFamily,
    marginBottom: Spacing.xs,
  },
  transactionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  transactionDescription: {
    fontSize: Typography.sizes.sm,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
    flex: 1,
  },
  transactionDate: {
    fontSize: Typography.sizes.sm,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
    minWidth: 80,
  },
  transactionAmount: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semiBold,
    fontFamily: Typography.fontFamily,
  },
  earnedAmount: {
    color: Colors.success,
  },
  spentAmount: {
    color: Colors.error,
  },
  moreButton: {
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    marginTop: Spacing.base,
  },
  moreButtonDisabled: {
    opacity: 0.6,
  },
  moreButtonText: {
    fontSize: Typography.sizes.base,
    color: Colors.mainBlue5,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },
  moreButtonTextDisabled: {
    color: Colors.textGray,
  },
});

export default PointPage;