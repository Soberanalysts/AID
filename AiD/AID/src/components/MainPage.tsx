import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface User {
  id: string;
  name: string;
  avatar?: string;
  subtitle?: string;
}

interface ContentCard {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  category?: string;
  date?: string;
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const MainPage: React.FC = () => {
  // Sample data based on the Figma design
  const navigationTabs = ['전체', '호스팅', '커뮤니티', '건강/취미', '추천'];
  
  const userRecommendations: User[] = [
    { id: '1', name: '네 번째는 해리포터가', subtitle: '팔로워 246명' },
    { id: '2', name: '다른 프로젝트 운영자', subtitle: '팔로워 189명' },
    { id: '3', name: '세 번째 추천 사용자', subtitle: '팔로워 142명' },
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
      title: '지금 인기 많은 커뮤니티들',
      subtitle: '인기 급상승 리뷰와 후기의 공간',
      category: '커뮤니티',
    },
  ];

  const articles = [
    {
      id: '1',
      title: '2024/11월2일 12시30분 봄날 벚꽃 cccccc',
      author: '관리자',
      date: '2024.11.01',
      engagement: { likes: 12, comments: 5, shares: 2 },
    },
    {
      id: '2',
      title: '오늘 전국 지역별 요리세수료 - 실무편 고급정도 초기',
      author: '관리자', 
      date: '2024.11.01',
      engagement: { likes: 8, comments: 3, shares: 1 },
    },
    {
      id: '3',
      title: '페시캐이 선택법 나이별세고 - 자세한 꽃꽂이는 초기',
      author: '관리자',
      date: '2024.11.01', 
      engagement: { likes: 15, comments: 7, shares: 4 },
    },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileText}>에이디</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>236,272</Text>
          <View style={styles.notificationBell}>
            <Text style={styles.bellIcon}>🔔</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderBanner = () => (
    <View style={styles.banner}>
      <View style={styles.bannerPlaceholder} />
    </View>
  );

  const renderNavigationTabs = () => (
    <View style={styles.tabContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {navigationTabs.map((tab, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.tab, index === 0 && styles.activeTab]}
          >
            <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
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
        <Text style={styles.sectionTitle}>네 번째는 해리포터가</Text>
        <Text style={styles.sectionSubtitle}>팔로우하지 않는 예정에서 추천하는 리스트입니다</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>더보기 ›</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {contentCards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.contentCard}>
            <View style={styles.cardImagePlaceholder} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderUserRecommendations = () => (
    <View style={styles.recommendationSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>팔로우 추천 인친저장소목록</Text>
        <Text style={styles.sectionSubtitle}>모든 새롭지 않는 추천글을 추룸 등록 불에서 많은 추천 인친을 위해 있습니다.</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>더보기 ›</Text>
        </TouchableOpacity>
      </View>

      {userRecommendations.map((user) => (
        <View key={user.id} style={styles.userCard}>
          <View style={styles.userAvatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userSubtitle}>{user.subtitle}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>팔로우</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderArticleSection = () => (
    <View style={styles.articleSection}>
      <Text style={styles.sectionTitle}>지금 인기 있는 커뮤니티들</Text>
      
      {articles.map((article) => (
        <TouchableOpacity key={article.id} style={styles.articleCard}>
          <View style={styles.articleImagePlaceholder} />
          <View style={styles.articleContent}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            <View style={styles.articleMeta}>
              <Text style={styles.articleAuthor}>{article.author}</Text>
              <Text style={styles.articleDate}>{article.date}</Text>
            </View>
            <View style={styles.engagementRow}>
              <Text style={styles.engagementText}>❤️ {article.engagement.likes}</Text>
              <Text style={styles.engagementText}>💬 {article.engagement.comments}</Text>
              <Text style={styles.engagementText}>📤 {article.engagement.shares}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderBottomNavigation = () => (
    <View style={styles.bottomNav}>
      {['홈', '검토', '검색', '배팅', '마이'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.bottomNavItem}>
          <View style={[styles.bottomNavIcon, index === 0 && styles.activeBottomNavIcon]} />
          <Text style={[styles.bottomNavText, index === 0 && styles.activeBottomNavText]}>
            {item}
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
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2651E8',
    marginRight: 8,
  },
  notificationBell: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    fontSize: 18,
  },

  // Banner Styles
  banner: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bannerPlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },

  // Tab Styles
  tabContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2651E8',
  },
  tabText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '400',
  },
  activeTabText: {
    color: '#2651E8',
    fontWeight: '500',
  },

  // Content Section Styles
  contentSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  moreButton: {
    fontSize: 14,
    color: '#2651E8',
    fontWeight: '500',
  },
  contentCard: {
    width: 160,
    marginRight: 12,
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666666',
  },

  // Recommendation Section Styles
  recommendationSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E5E5',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 2,
  },
  userSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  followButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#BECDFF',
    borderRadius: 16,
  },
  followButtonText: {
    fontSize: 12,
    color: '#2651E8',
    fontWeight: '500',
  },

  // Article Section Styles
  articleSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 8,
    borderTopColor: '#F8F8F8',
  },
  articleCard: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  articleImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    marginRight: 12,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 8,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  articleAuthor: {
    fontSize: 12,
    color: '#666666',
    marginRight: 8,
  },
  articleDate: {
    fontSize: 12,
    color: '#666666',
  },
  engagementRow: {
    flexDirection: 'row',
  },
  engagementText: {
    fontSize: 12,
    color: '#666666',
    marginRight: 12,
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingVertical: 8,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 4,
  },
  activeBottomNavIcon: {
    backgroundColor: '#2651E8',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#666666',
  },
  activeBottomNavText: {
    color: '#2651E8',
    fontWeight: '500',
  },
});

export default MainPage;