import { PointData, PointTransaction } from '../types';

/**
 * Comprehensive Point System Mockup Data Service
 * 
 * This service provides realistic mockup data for the point system including:
 * - Various point earning activities (attendance, data collection, step counter, surveys, referrals)
 * - Point spending transactions (purchases, redemptions, services)
 * - Realistic Korean descriptions and varied point amounts
 * - Mixed transaction history from the last 2 weeks
 */

// Helper function to generate dates in the last 2 weeks
const generateRecentDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// Comprehensive point transaction mockup data
const comprehensiveTransactions: PointTransaction[] = [
  // Recent transactions (last 2 weeks)
  {
    id: '1',
    type: '출석체크',
    description: '오늘의 출석체크 완료',
    date: generateRecentDate(0), // Today
    amount: 10,
    isEarned: true,
  },
  {
    id: '2',
    type: '만보기',
    description: '일일 목표 10,000보 달성!',
    date: generateRecentDate(0),
    amount: 50,
    isEarned: true,
  },
  {
    id: '3',
    type: '데이터 수집',
    description: '건강 데이터 입력 완료 (혈압, 체중)',
    date: generateRecentDate(1),
    amount: 200,
    isEarned: true,
  },
  {
    id: '4',
    type: '구매',
    description: '스타벅스 아이스 아메리카노 T',
    date: generateRecentDate(1),
    amount: 4200,
    isEarned: false,
  },
  {
    id: '5',
    type: '설문조사',
    description: '건강 생활습관 설문조사 참여',
    date: generateRecentDate(2),
    amount: 500,
    isEarned: true,
  },
  {
    id: '6',
    type: '출석체크',
    description: '연속 출석 7일 보너스!',
    date: generateRecentDate(2),
    amount: 100,
    isEarned: true,
  },
  {
    id: '7',
    type: '만보기',
    description: '주간 걸음 목표 70,000보 달성',
    date: generateRecentDate(3),
    amount: 1000,
    isEarned: true,
  },
  {
    id: '8',
    type: '구매',
    description: 'GS25 편의점 도시락',
    date: generateRecentDate(3),
    amount: 3500,
    isEarned: false,
  },
  {
    id: '9',
    type: '데이터 수집',
    description: '운동 데이터 동기화 (Apple Health)',
    date: generateRecentDate(4),
    amount: 150,
    isEarned: true,
  },
  {
    id: '10',
    type: '추천인',
    description: '친구 추천으로 가입 완료',
    date: generateRecentDate(4),
    amount: 2000,
    isEarned: true,
  },
  {
    id: '11',
    type: '퀴즈',
    description: '건강상식 퀴즈 5문제 정답',
    date: generateRecentDate(5),
    amount: 300,
    isEarned: true,
  },
  {
    id: '12',
    type: '출석체크',
    description: '주말 출석체크',
    date: generateRecentDate(5),
    amount: 10,
    isEarned: true,
  },
  {
    id: '13',
    type: '서비스 이용',
    description: '프리미엄 건강분석 리포트',
    date: generateRecentDate(6),
    amount: 1500,
    isEarned: false,
  },
  {
    id: '14',
    type: '만보기',
    description: '15,000보 초과 달성 보너스',
    date: generateRecentDate(6),
    amount: 100,
    isEarned: true,
  },
  {
    id: '15',
    type: '데이터 수집',
    description: '수면 패턴 데이터 7일 연속 입력',
    date: generateRecentDate(7),
    amount: 800,
    isEarned: true,
  },
  {
    id: '16',
    type: '구매',
    description: '올리브영 비타민 C',
    date: generateRecentDate(7),
    amount: 12000,
    isEarned: false,
  },
  {
    id: '17',
    type: '설문조사',
    description: '앱 사용성 개선 설문 참여',
    date: generateRecentDate(8),
    amount: 200,
    isEarned: true,
  },
  {
    id: '18',
    type: '출석체크',
    description: '평일 출석체크',
    date: generateRecentDate(8),
    amount: 10,
    isEarned: true,
  },
  {
    id: '19',
    type: '이벤트',
    description: '신규 기능 체험 이벤트 참여',
    date: generateRecentDate(9),
    amount: 1000,
    isEarned: true,
  },
  {
    id: '20',
    type: '구매',
    description: '쿠팡 생필품 구매',
    date: generateRecentDate(9),
    amount: 8500,
    isEarned: false,
  },
  {
    id: '21',
    type: '만보기',
    description: '주말 산책 8,500보',
    date: generateRecentDate(10),
    amount: 50,
    isEarned: true,
  },
  {
    id: '22',
    type: '데이터 수집',
    description: '식단 기록 입력 완료',
    date: generateRecentDate(10),
    amount: 100,
    isEarned: true,
  },
  {
    id: '23',
    type: '리워드',
    description: '월간 건강 챌린지 완주',
    date: generateRecentDate(11),
    amount: 5000,
    isEarned: true,
  },
  {
    id: '24',
    type: '출석체크',
    description: '연속 출석 14일 달성!',
    date: generateRecentDate(11),
    amount: 500,
    isEarned: true,
  },
  {
    id: '25',
    type: '구매',
    description: '교보문고 건강 도서',
    date: generateRecentDate(12),
    amount: 15000,
    isEarned: false,
  },
  {
    id: '26',
    type: '설문조사',
    description: '운동 선호도 조사 참여',
    date: generateRecentDate(12),
    amount: 300,
    isEarned: true,
  },
  {
    id: '27',
    type: '만보기',
    description: '20,000보 초과 대박!',
    date: generateRecentDate(13),
    amount: 200,
    isEarned: true,
  },
  {
    id: '28',
    type: '데이터 수집',
    description: '심박수 데이터 연동 완료',
    date: generateRecentDate(13),
    amount: 250,
    isEarned: true,
  },
  {
    id: '29',
    type: '출석체크',
    description: '주간 시작 출석체크',
    date: generateRecentDate(14),
    amount: 10,
    isEarned: true,
  },
  {
    id: '30',
    type: '서비스 이용',
    description: '개인 트레이너 상담 예약',
    date: generateRecentDate(14),
    amount: 3000,
    isEarned: false,
  },
];

// Calculate total points based on transactions
const calculateAvailablePoints = (transactions: PointTransaction[]): number => {
  return transactions.reduce((total, transaction) => {
    return transaction.isEarned 
      ? total + transaction.amount 
      : total - transaction.amount;
  }, 250000); // Starting base points
};

// Main point data with comprehensive transactions
export const comprehensivePointData: PointData = {
  availablePoints: calculateAvailablePoints(comprehensiveTransactions),
  retailPoints: 5000, // Some retail points available
  transactions: comprehensiveTransactions,
};

/**
 * Point earning categories and their typical amounts
 */
export const pointEarningCategories = {
  attendance: {
    name: '출석체크',
    description: '매일 앱에 접속하여 출석체크',
    dailyAmount: 10,
    weeklyBonus: 100,
    monthlyBonus: 1000,
    locations: ['앱 메인화면', '마이페이지']
  },
  dataCollection: {
    name: '데이터 수집',
    description: '건강 데이터 입력 및 연동',
    amounts: [100, 150, 200, 250, 300, 500, 800],
    types: ['혈압', '체중', '수면패턴', '운동기록', '식단기록', '심박수'],
    locations: ['건강 대시보드', '데이터 입력 페이지', '웨어러블 연동']
  },
  stepCounter: {
    name: '만보기',
    description: '걸음수 목표 달성 리워드',
    amounts: {
      5000: 20,   // 5천보: 20P
      8000: 50,   // 8천보: 50P
      10000: 100, // 1만보: 100P
      15000: 200, // 1만5천보: 200P
      20000: 300, // 2만보: 300P
    },
    weeklyBonus: 1000,
    locations: ['걸음수 트래커', '운동 페이지']
  },
  surveys: {
    name: '설문조사/퀴즈',
    description: '건강 관련 설문 및 퀴즈 참여',
    amounts: [200, 300, 500, 1000],
    types: ['건강상식 퀴즈', '생활습관 설문', '앱 개선 설문', '건강 평가'],
    locations: ['알림 센터', '이벤트 페이지', '설문 탭']
  },
  referrals: {
    name: '추천인',
    description: '친구 추천으로 신규 가입',
    amount: 2000,
    bonusAmount: 5000, // 추천받은 친구가 7일 활동 시
    locations: ['친구 초대 페이지', '마이페이지']
  },
  events: {
    name: '이벤트/챌린지',
    description: '특별 이벤트 및 챌린지 참여',
    amounts: [1000, 2000, 5000, 10000],
    types: ['월간 챌린지', '신규 기능 체험', '시즌 이벤트', '건강 목표 달성'],
    locations: ['이벤트 페이지', '챌린지 탭', '푸시 알림']
  }
};

/**
 * Point spending categories and typical usage
 */
export const pointSpendingCategories = {
  shopping: {
    name: '쇼핑',
    description: '온라인/오프라인 쇼핑에서 포인트 사용',
    partners: ['스타벅스', 'GS25', '올리브영', '쿠팡', '교보문고'],
    discountRates: ['1P = 1원', '최대 50% 할인', '무료배송 쿠폰'],
    locations: ['파트너 매장', '온라인 쇼핑몰', '앱 내 스토어']
  },
  services: {
    name: '서비스',
    description: '프리미엄 건강 서비스 이용',
    types: [
      { name: '건강분석 리포트', cost: 1500 },
      { name: '개인 트레이너 상담', cost: 3000 },
      { name: '영양사 상담', cost: 2500 },
      { name: '프리미엄 운동 프로그램', cost: 5000 }
    ],
    locations: ['서비스 페이지', '프리미엄 탭', '전문가 상담']
  },
  rewards: {
    name: '리워드',
    description: '다양한 보상 및 혜택으로 교환',
    types: [
      { name: '기프티콘', cost: '1000P~50000P' },
      { name: '할인쿠폰', cost: '500P~5000P' },
      { name: '무료체험권', cost: '2000P~10000P' },
      { name: '건강용품', cost: '5000P~30000P' }
    ],
    locations: ['리워드 센터', '포인트 샵', '혜택 페이지']
  }
};

/**
 * Get point data service - main export function
 */
export const getPointData = (): PointData => {
  return comprehensivePointData;
};

/**
 * Get transactions by type
 */
export const getTransactionsByType = (type: string): PointTransaction[] => {
  return comprehensiveTransactions.filter(transaction => transaction.type === type);
};

/**
 * Get recent transactions (last N days)
 */
export const getRecentTransactions = (days: number = 7): PointTransaction[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return comprehensiveTransactions.filter(transaction => {
    const transactionDate = new Date(transaction.date.replace(/\./g, '-'));
    return transactionDate >= cutoffDate;
  });
};

/**
 * Get earned vs spent summary
 */
export const getPointsSummary = () => {
  const earned = comprehensiveTransactions
    .filter(t => t.isEarned)
    .reduce((sum, t) => sum + t.amount, 0);
    
  const spent = comprehensiveTransactions
    .filter(t => !t.isEarned)
    .reduce((sum, t) => sum + t.amount, 0);
    
  return {
    totalEarned: earned,
    totalSpent: spent,
    netPoints: earned - spent
  };
};

export default {
  getPointData,
  getTransactionsByType,
  getRecentTransactions,
  getPointsSummary,
  pointEarningCategories,
  pointSpendingCategories,
  comprehensivePointData
};