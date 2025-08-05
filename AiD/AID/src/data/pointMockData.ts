/**
 * Additional Point System Mock Data
 * 
 * This file contains supplementary mock data that can be used for:
 * - Testing different point scenarios
 * - Demonstrating edge cases
 * - A/B testing different point structures
 * - Development and prototyping
 */

import { PointData, PointTransaction } from '../types';

/**
 * High-activity user scenario
 * User who actively uses all features and has many transactions
 */
export const highActivityUserData: PointData = {
  availablePoints: 485672,
  retailPoints: 12500,
  transactions: [
    // Multiple daily activities
    {
      id: 'ha1',
      type: '출석체크',
      description: '연속 출석 30일 달성! 특별 보너스',
      date: '2025.08.05',
      amount: 1000,
      isEarned: true,
    },
    {
      id: 'ha2',
      type: '만보기',
      description: '25,000보 달성! 슈퍼 워커',
      date: '2025.08.05',
      amount: 500,
      isEarned: true,
    },
    {
      id: 'ha3',
      type: '데이터 수집',
      description: '완벽한 건강 데이터 입력 (혈압, 체중, 수면, 운동, 식단)',
      date: '2025.08.05',
      amount: 1500,
      isEarned: true,
    },
    {
      id: 'ha4',
      type: '구매',
      description: '프리미엄 영양제 정기구독',
      date: '2025.08.05',
      amount: 89000,
      isEarned: false,
    },
    {
      id: 'ha5',
      type: '챌린지',
      description: '8월 여름 다이어트 챌린지 완주',
      date: '2025.08.04',
      amount: 10000,
      isEarned: true,
    },
  ]
};

/**
 * New user scenario
 * Recently joined user with minimal transaction history
 */
export const newUserData: PointData = {
  availablePoints: 2100,
  retailPoints: 0,
  transactions: [
    {
      id: 'nu1',
      type: '가입 보너스',
      description: 'AiD 회원가입을 환영합니다!',
      date: '2025.08.03',
      amount: 1000,
      isEarned: true,
    },
    {
      id: 'nu2',
      type: '튜토리얼',
      description: '앱 사용법 튜토리얼 완료',
      date: '2025.08.03',
      amount: 500,
      isEarned: true,
    },
    {
      id: 'nu3',
      type: '출석체크',
      description: '첫 출석체크',
      date: '2025.08.04',
      amount: 10,
      isEarned: true,
    },
    {
      id: 'nu4',
      type: '데이터 수집',
      description: '첫 건강 데이터 입력',
      date: '2025.08.04',
      amount: 200,
      isEarned: true,
    },
    {
      id: 'nu5',
      type: '출석체크',
      description: '2일차 출석체크',
      date: '2025.08.05',
      amount: 10,
      isEarned: true,
    },
    {
      id: 'nu6',
      type: '설문조사',
      description: '건강 목표 설정 설문',
      date: '2025.08.05',
      amount: 300,
      isEarned: true,
    },
    {
      id: 'nu7',
      type: '만보기',
      description: '첫 걸음수 달성! 8,500보',
      date: '2025.08.05',
      amount: 50,
      isEarned: true,
    },
    {
      id: 'nu8',
      type: '구매',
      description: '스타벅스 아메리카노 (첫 구매 할인)',
      date: '2025.08.05',
      amount: 30,
      isEarned: false,
    },
  ]
};

/**
 * Premium user scenario
 * User who frequently uses premium services and makes large purchases
 */
export const premiumUserData: PointData = {
  availablePoints: 156789,
  retailPoints: 25000,
  transactions: [
    {
      id: 'pu1',
      type: '프리미엄 서비스',
      description: 'AI 건강 분석 프리미엄 패키지',
      date: '2025.08.05',
      amount: 15000,
      isEarned: false,
    },
    {
      id: 'pu2',
      type: '전문가 상담',
      description: '영양사 1:1 맞춤 상담 (60분)',
      date: '2025.08.04',
      amount: 8000,
      isEarned: false,
    },
    {
      id: 'pu3',
      type: 'VIP 보너스',
      description: 'VIP 등급 승격 축하 보너스',
      date: '2025.08.03',
      amount: 5000,
      isEarned: true,
    },
    {
      id: 'pu4',
      type: '대용량 구매',
      description: '건강기능식품 3개월분 구매',
      date: '2025.08.02',
      amount: 150000,
      isEarned: false,
    },
    {
      id: 'pu5',
      type: '리뷰 보상',
      description: '상품 리뷰 작성 (5성급)',
      date: '2025.08.02',
      amount: 1000,
      isEarned: true,
    },
  ]
};

/**
 * Edge case scenarios for testing
 */
export const edgeCaseScenarios = {
  // User with zero points
  zeroPoints: {
    availablePoints: 0,
    retailPoints: 0,
    transactions: [
      {
        id: 'zero1',
        type: '구매',
        description: '모든 포인트 사용 완료',
        date: '2025.08.05',
        amount: 1500,
        isEarned: false,
      }
    ]
  },

  // User with negative scenario (shouldn't happen in real app, but for testing)
  highSpender: {
    availablePoints: 50,
    retailPoints: 0,
    transactions: [
      {
        id: 'hs1',
        type: '구매',
        description: '고가 상품 구매',
        date: '2025.08.05',
        amount: 200000,
        isEarned: false,
      },
      {
        id: 'hs2',
        type: '적립',
        description: '대량 적립',
        date: '2025.08.04',
        amount: 200050,
        isEarned: true,
      }
    ]
  },

  // User with very long transaction descriptions
  longDescriptions: {
    availablePoints: 5000,
    retailPoints: 0,
    transactions: [
      {
        id: 'ld1',
        type: '특별 이벤트',
        description: '여름 특별 건강 챌린지 완주 기념 보너스 포인트 지급 이벤트 참여 완료 및 추가 혜택 제공',
        date: '2025.08.05',
        amount: 5000,
        isEarned: true,
      }
    ]
  }
};

/**
 * Sample data for different user types
 */
export const userTypeScenarios = {
  beginner: newUserData,
  active: highActivityUserData,
  premium: premiumUserData,
};

/**
 * Point earning activities with detailed breakdown
 */
export const pointEarningBreakdown = {
  daily: {
    attendance: 10,
    steps5k: 20,
    steps10k: 50,
    steps15k: 100,
    dataInput: 100,
    quiz: 50,
  },
  weekly: {
    attendanceBonus: 100,
    stepGoal: 500,
    dataConsistency: 300,
    surveyParticipation: 200,
  },
  monthly: {
    attendanceStreak: 1000,
    challengeCompletion: 5000,
    referralBonus: 2000,
    vipUpgrade: 10000,
  },
  special: {
    firstPurchase: 500,
    reviewWriting: 200,
    feedbackSubmission: 300,
    betaTesting: 1000,
    socialSharing: 100,
  }
};

/**
 * Point spending categories with price ranges
 */
export const pointSpendingBreakdown = {
  food: {
    coffee: { min: 3000, max: 6000 },
    meal: { min: 8000, max: 25000 },
    snacks: { min: 1000, max: 5000 },
  },
  health: {
    supplements: { min: 15000, max: 100000 },
    equipment: { min: 20000, max: 500000 },
    consultation: { min: 5000, max: 20000 },
  },
  services: {
    premiumFeatures: { min: 1000, max: 15000 },
    personalTraining: { min: 10000, max: 50000 },
    healthReports: { min: 2000, max: 8000 },
  },
  shopping: {
    giftCards: { min: 5000, max: 100000 },
    discountCoupons: { min: 500, max: 5000 },
    freeShipping: { min: 1000, max: 3000 },
  }
};

export default {
  highActivityUserData,
  newUserData,
  premiumUserData,
  edgeCaseScenarios,
  userTypeScenarios,
  pointEarningBreakdown,
  pointSpendingBreakdown,
};