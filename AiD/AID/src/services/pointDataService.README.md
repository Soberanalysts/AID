# Point Data Service Documentation

## Overview

The Point Data Service provides comprehensive mockup data for the AiD point system, including realistic Korean transaction descriptions, varied point amounts, and multiple user scenarios for development and testing.

## File Structure

```
src/
├── services/
│   ├── pointDataService.ts    # Main point data service
│   └── index.ts               # Service exports
├── data/
│   ├── pointMockData.ts       # Additional mock data scenarios
│   └── index.ts               # Data exports
└── types/
    └── index.ts               # Point-related type definitions
```

## Quick Start

```typescript
import { getPointData } from '../services/pointDataService';

// Get comprehensive point data
const pointData = getPointData();

// Use in your component
<PointPage pointData={pointData} onBack={handleBack} />
```

## Main Features

### 1. Point Transaction Categories

#### **Earning Points (+)**
- **출석체크 (Attendance Check)**: Daily login rewards (10P-1000P)
- **데이터 수집 (Data Collection)**: Health data input rewards (100P-800P)
- **만보기 (Step Counter)**: Walking/exercise rewards (50P-300P)
- **설문조사/퀴즈 (Surveys/Quizzes)**: Health assessments (200P-1000P)
- **추천인 (Referrals)**: Friend referral bonuses (2000P-5000P)
- **이벤트/챌린지 (Events/Challenges)**: Special events (1000P-10000P)

#### **Spending Points (-)**
- **구매 (Purchase)**: Shopping transactions (30P-150000P)
- **서비스 이용 (Services)**: Premium health services (1500P-8000P)
- **전문가 상담 (Expert Consultation)**: Professional consultations (3000P-8000P)

### 2. Data Service Functions

```typescript
// Main data getter
getPointData(): PointData

// Filter transactions by type
getTransactionsByType(type: string): PointTransaction[]

// Get recent transactions
getRecentTransactions(days: number = 7): PointTransaction[]

// Get points summary
getPointsSummary(): {
  totalEarned: number;
  totalSpent: number;
  netPoints: number;
}
```

### 3. Point Categories Reference

```typescript
import { pointEarningCategories, pointSpendingCategories } from '../services/pointDataService';

// Access earning category details
console.log(pointEarningCategories.attendance.dailyAmount); // 10
console.log(pointEarningCategories.stepCounter.amounts[10000]); // 100P for 10k steps

// Access spending category details
console.log(pointSpendingCategories.shopping.partners); // ['스타벅스', 'GS25', ...]
```

## Additional Mock Data Scenarios

### User Types

```typescript
import { userTypeScenarios } from '../data/pointMockData';

// New user with minimal transactions
const newUser = userTypeScenarios.beginner;

// Active user with many transactions
const activeUser = userTypeScenarios.active;

// Premium user with high-value transactions
const premiumUser = userTypeScenarios.premium;
```

### Edge Cases

```typescript
import { edgeCaseScenarios } from '../data/pointMockData';

// User with zero points
const zeroPointUser = edgeCaseScenarios.zeroPoints;

// User with very long descriptions
const longDescUser = edgeCaseScenarios.longDescriptions;
```

## Transaction Structure

```typescript
interface PointTransaction {
  id: string;                // Unique transaction ID
  type: string;              // Korean transaction type
  description: string;       // Korean description
  date: string;              // Format: 'YYYY.MM.DD'
  amount: number;            // Point amount
  isEarned: boolean;         // true for earned (+), false for spent (-)
}
```

## Sample Transactions

### Recent Earning Examples
- **출석체크**: "오늘의 출석체크 완료" (+10P)
- **만보기**: "일일 목표 10,000보 달성!" (+50P)
- **데이터 수집**: "건강 데이터 입력 완료 (혈압, 체중)" (+200P)
- **설문조사**: "건강 생활습관 설문조사 참여" (+500P)
- **챌린지**: "월간 건강 챌린지 완주" (+5000P)

### Recent Spending Examples
- **구매**: "스타벅스 아이스 아메리카노 T" (-4200P)
- **구매**: "올리브영 비타민 C" (-12000P)
- **서비스 이용**: "프리미엄 건강분석 리포트" (-1500P)
- **전문가 상담**: "개인 트레이너 상담 예약" (-3000P)

## Usage in Components

### Basic Usage
```typescript
import { getPointData } from '../services/pointDataService';

const MyComponent = () => {
  const pointData = getPointData();
  
  return (
    <PointPage 
      pointData={pointData}
      onBack={() => navigation.goBack()}
    />
  );
};
```

### Filtered Usage
```typescript
import { getTransactionsByType, getRecentTransactions } from '../services/pointDataService';

// Show only attendance transactions
const attendanceTransactions = getTransactionsByType('출석체크');

// Show last 3 days transactions
const recentTransactions = getRecentTransactions(3);
```

### Custom Scenarios
```typescript
import { newUserData, highActivityUserData } from '../data/pointMockData';

// For testing new user experience
<PointPage pointData={newUserData} />

// For testing high-activity user
<PointPage pointData={highActivityUserData} />
```

## Point Earning Locations

### Where Users Can Earn Points
- **앱 메인화면**: Daily attendance check
- **건강 대시보드**: Data input rewards
- **걸음수 트래커**: Step counter rewards
- **설문 탭**: Survey participation
- **이벤트 페이지**: Special events
- **친구 초대 페이지**: Referral bonuses

### Where Users Can Spend Points
- **파트너 매장**: Starbucks, GS25, Olive Young
- **온라인 쇼핑몰**: Coupang, Kyobo Bookstore
- **앱 내 스토어**: Premium services
- **전문가 상담**: Health consultations
- **리워드 센터**: Gift cards and coupons

## Real-world Integration Notes

When integrating with a real backend:

1. **API Integration**: Replace service functions with API calls
2. **Date Formatting**: Ensure consistent date format ('YYYY.MM.DD')
3. **Localization**: All descriptions are in Korean
4. **Point Calculations**: Validate point math on both client and server
5. **Transaction IDs**: Use UUID or server-generated IDs in production

## Development Tips

1. **Testing Different Scenarios**: Use the various user type scenarios to test UI edge cases
2. **Performance**: The service includes 30+ transactions for realistic performance testing
3. **Localization**: All strings are in Korean as per design requirements
4. **Point Formatting**: Use `toLocaleString('ko-KR')` for number formatting

## Contributing

When adding new transaction types or scenarios:

1. Follow Korean naming conventions
2. Include realistic point amounts
3. Add both earning and spending examples
4. Update category definitions
5. Include location information for earning/spending

This service provides a solid foundation for developing and testing the point system functionality while maintaining realistic data patterns.