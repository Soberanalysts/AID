import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import { User, ContentCard, Article } from '../types';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/colors';

const { width: screenWidth } = Dimensions.get('window');

const MainPage: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeBottomNavIndex, setActiveBottomNavIndex] = useState(0);

  // Sample data based on the Figma design with proper Korean text
  const navigationTabs = ['전체', '호스팅', '커뮤니티', '건강/취미', '추천'];
  
  const userRecommendations: User[] = [
    { id: '1', name: '네 번째는 해리포터가', subtitle: '팔로워 246명' },
    { id: '2', name: '김철수의 요리교실', subtitle: '팔로워 189명' },
    { id: '3', name: '여행매니아', subtitle: '팔로워 142명' },
  ];

  const contentCards: ContentCard[] = [
    {
      id: '1',
      title: '지금 인기 많은 커뮤니티들',
      subtitle: '인기 급상승 리뷰와 후기의 공간',
      category: '커뮤니티',
    },
    {
      id: '2',
      title: '뭐든지 질문받는 자리',
      subtitle: '궁금한게 있으시면 언제든지 Q&A',
      category: '커뮤니티',
    },
    {
      id: '3',
      title: '건강한 생활 습관',
      subtitle: '건강 관리와 운동 정보 공유',
      category: '건강/취미',
    },
  ];

  const articles: Article[] = [
    {
      id: '1',
      title: '2024년 11월 2일 12시 30분 봄날 벚꽃 축제 후기',
      author: '관리자',
      date: '2024.11.02',
      engagement: { likes: 12, comments: 5, shares: 2 },
    },
    {
      id: '2',
      title: '오늘 전국 지역별 요리 강습 - 실무편 고급 과정 안내',
      author: '요리전문가', 
      date: '2024.11.01',
      engagement: { likes: 8, comments: 3, shares: 1 },
    },
    {
      id: '3',
      title: '플라워 카페 선택법과 나이별 취향 - 자세한 꽃꽂이 초보 가이드',
      author: '꽃집사장',
      date: '2024.11.01', 
      engagement: { likes: 15, comments: 7, shares: 4 },
    },
  ];

  const bottomNavItems = [
    { id: 'home', label: '홈', icon: '🏠' },
    { id: 'explore', label: '탐색', icon: '🔍' },
    { id: 'search', label: '검색', icon: '🔎' },
    { id: 'chat', label: '채팅', icon: '💬' },
    { id: 'profile', label: '마이', icon: '👤' },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.profileIcon}>
          <Text style={styles.profileText}>AiD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>236,272</Text>
          <TouchableOpacity style={styles.notificationBell}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderBanner = () => (
    <View style={styles.banner}>
      <TouchableOpacity style={styles.bannerPlaceholder} activeOpacity={0.8}>
        <Text style={styles.bannerText}>배너 영역</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNavigationTabs = () => (
    <View style={styles.tabContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabScrollContent}
      >
        {navigationTabs.map((tab, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.tab, index === activeTabIndex && styles.activeTab]}
            onPress={() => setActiveTabIndex(index)}
          >
            <Text style={[styles.tabText, index === activeTabIndex && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderContentSection = () => (
    <View style={styles.contentSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>추천 커뮤니티</Text>
        <Text style={styles.sectionSubtitle}>관심사에 맞는 커뮤니티를 추천해드립니다</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>더보기 ›</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardScrollContent}
      >
        {contentCards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.contentCard} activeOpacity={0.8}>
            <View style={styles.cardImagePlaceholder}>
              <Text style={styles.cardPlaceholderText}>{card.category}</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={2}>{card.title}</Text>
            <Text style={styles.cardSubtitle} numberOfLines={2}>{card.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderUserRecommendations = () => (
    <View style={styles.recommendationSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>팔로우 추천</Text>
        <Text style={styles.sectionSubtitle}>관심사가 비슷한 사용자들을 추천해드립니다</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>더보기 ›</Text>
        </TouchableOpacity>
      </View>

      {userRecommendations.map((user) => (
        <TouchableOpacity key={user.id} style={styles.userCard} activeOpacity={0.8}>
          <View style={styles.userAvatar}>
            <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userSubtitle}>{user.subtitle}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>팔로우</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderArticleSection = () => (
    <View style={styles.articleSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>인기 게시글</Text>
        <Text style={styles.sectionSubtitle}>지금 가장 인기 있는 게시글들을 확인해보세요</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>더보기 ›</Text>
        </TouchableOpacity>
      </View>
      
      {articles.map((article, index) => (
        <TouchableOpacity 
          key={article.id} 
          style={[
            styles.articleCard, 
            index === articles.length - 1 && styles.lastArticleCard
          ]}
          activeOpacity={0.8}
        >
          <View style={styles.articleImagePlaceholder}>
            <Text style={styles.articleImageText}>이미지</Text>
          </View>
          <View style={styles.articleContent}>
            <Text style={styles.articleTitle} numberOfLines={2}>{article.title}</Text>
            <View style={styles.articleMeta}>
              <Text style={styles.articleAuthor}>{article.author}</Text>
              <Text style={styles.articleDate}>{article.date}</Text>
            </View>
            <View style={styles.engagementRow}>
              <View style={styles.engagementItem}>
                <Text style={styles.engagementIcon}>❤️</Text>
                <Text style={styles.engagementText}>{article.engagement.likes}</Text>
              </View>
              <View style={styles.engagementItem}>
                <Text style={styles.engagementIcon}>💬</Text>
                <Text style={styles.engagementText}>{article.engagement.comments}</Text>
              </View>
              <View style={styles.engagementItem}>
                <Text style={styles.engagementIcon}>📤</Text>
                <Text style={styles.engagementText}>{article.engagement.shares}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderBottomNavigation = () => (
    <View style={styles.bottomNav}>
      {bottomNavItems.map((item, index) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.bottomNavItem}
          onPress={() => setActiveBottomNavIndex(index)}
          activeOpacity={0.7}
        >
          <View style={[
            styles.bottomNavIconContainer, 
            index === activeBottomNavIndex && styles.activeBottomNavIconContainer
          ]}>
            <Text style={[
              styles.bottomNavIcon, 
              index === activeBottomNavIndex && styles.activeBottomNavIcon
            ]}>
              {item.icon}
            </Text>
          </View>
          <Text style={[
            styles.bottomNavText, 
            index === activeBottomNavIndex && styles.activeBottomNavText
          ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView}>
        {renderBanner()}
        {renderNavigationTabs()}
        {renderContentSection()}
        {renderUserRecommendations()}
        {renderArticleSection()}
      </ScrollView>
      {renderBottomNavigation()}
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.mainBlue5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: Colors.white,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semiBold,
    fontFamily: Typography.fontFamily,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  notificationText: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semiBold,
    color: Colors.mainBlue5,
    fontFamily: Typography.fontFamily,
  },
  notificationBell: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bellIcon: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 4,
    backgroundColor: Colors.error,
    borderRadius: BorderRadius.full,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fontFamily,
  },

  // Banner Styles
  banner: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
  },
  bannerPlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: Colors.mediumGray,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: Colors.textGray,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },

  // Tab Styles
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    backgroundColor: Colors.white,
  },
  tabScrollContent: {
    paddingHorizontal: Spacing.lg,
  },
  tab: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.base,
    marginRight: Spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: Colors.mainBlue5,
  },
  tabText: {
    fontSize: Typography.sizes.base,
    color: Colors.textGray,
    fontWeight: Typography.weights.regular,
    fontFamily: Typography.fontFamily,
  },
  activeTabText: {
    color: Colors.mainBlue5,
    fontWeight: Typography.weights.semiBold,
  },

  // Content Section Styles
  contentSection: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    backgroundColor: Colors.white,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semiBold,
    color: Colors.gray8,
    marginBottom: Spacing.xs,
    fontFamily: Typography.fontFamily,
  },
  sectionSubtitle: {
    fontSize: Typography.sizes.sm,
    color: Colors.textGray,
    marginBottom: Spacing.sm,
    fontFamily: Typography.fontFamily,
    lineHeight: Typography.lineHeights.base,
  },
  moreButton: {
    fontSize: Typography.sizes.sm,
    color: Colors.mainBlue5,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },
  cardScrollContent: {
    paddingRight: Spacing.lg,
  },
  contentCard: {
    width: 160,
    marginRight: Spacing.base,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  cardPlaceholderText: {
    color: Colors.textGray,
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },
  cardTitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
    color: Colors.gray8,
    marginBottom: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    fontFamily: Typography.fontFamily,
    lineHeight: Typography.lineHeights.tight,
  },
  cardSubtitle: {
    fontSize: Typography.sizes.xs,
    color: Colors.textGray,
    paddingHorizontal: Spacing.sm,
    paddingBottom: Spacing.sm,
    fontFamily: Typography.fontFamily,
    lineHeight: Typography.lineHeights.tight,
  },

  // Recommendation Section Styles
  recommendationSection: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    borderTopWidth: 8,
    borderTopColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.base,
    borderRadius: BorderRadius.base,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.mainBlue1,
    marginRight: Spacing.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: Colors.mainBlue5,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semiBold,
    fontFamily: Typography.fontFamily,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: Colors.gray8,
    marginBottom: 2,
    fontFamily: Typography.fontFamily,
  },
  userSubtitle: {
    fontSize: Typography.sizes.sm,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
  },
  followButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.mainBlue1,
    borderRadius: BorderRadius.full,
  },
  followButtonText: {
    fontSize: Typography.sizes.xs,
    color: Colors.mainBlue5,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },

  // Article Section Styles
  articleSection: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
    borderTopWidth: 8,
    borderTopColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  articleCard: {
    flexDirection: 'row',
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  lastArticleCard: {
    borderBottomWidth: 0,
  },
  articleImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: Colors.lightGray,
    borderRadius: BorderRadius.base,
    marginRight: Spacing.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleImageText: {
    color: Colors.textGray,
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.medium,
    fontFamily: Typography.fontFamily,
  },
  articleContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  articleTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.medium,
    color: Colors.gray8,
    marginBottom: Spacing.sm,
    lineHeight: Typography.lineHeights.base,
    fontFamily: Typography.fontFamily,
  },
  articleMeta: {
    flexDirection: 'row',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  articleAuthor: {
    fontSize: Typography.sizes.xs,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
  },
  articleDate: {
    fontSize: Typography.sizes.xs,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
  },
  engagementRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  engagementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  engagementIcon: {
    fontSize: 14,
  },
  engagementText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    paddingVertical: Spacing.sm,
    paddingBottom: Spacing.base,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  bottomNavIconContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    borderRadius: BorderRadius.sm,
  },
  activeBottomNavIconContainer: {
    backgroundColor: Colors.mainBlue1,
  },
  bottomNavIcon: {
    fontSize: 18,
  },
  activeBottomNavIcon: {
    fontSize: 18,
  },
  bottomNavText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textGray,
    fontWeight: Typography.weights.regular,
    fontFamily: Typography.fontFamily,
  },
  activeBottomNavText: {
    color: Colors.mainBlue5,
    fontWeight: Typography.weights.medium,
  },
});

export default MainPage;