/**
 * Point Data Service Usage Examples
 * 
 * This file demonstrates various ways to use the point data service
 * and different data scenarios for development and testing.
 */

import { 
  getPointData, 
  getTransactionsByType, 
  getRecentTransactions, 
  getPointsSummary,
  pointEarningCategories,
  pointSpendingCategories 
} from './pointDataService';

import { 
  newUserData, 
  highActivityUserData, 
  premiumUserData,
  edgeCaseScenarios,
  userTypeScenarios 
} from '../data/pointMockData';

// Example 1: Basic usage - Get default comprehensive data
export const getDefaultPointData = () => {
  const data = getPointData();
  console.log('Available Points:', data.availablePoints);
  console.log('Total Transactions:', data.transactions.length);
  return data;
};

// Example 2: Filter transactions by type
export const getAttendanceHistory = () => {
  const attendanceTransactions = getTransactionsByType('출석체크');
  console.log('Attendance Check History:', attendanceTransactions);
  return attendanceTransactions;
};

export const getPurchaseHistory = () => {
  const purchaseTransactions = getTransactionsByType('구매');
  console.log('Purchase History:', purchaseTransactions);
  return purchaseTransactions;
};

// Example 3: Get recent activity
export const getWeeklyActivity = () => {
  const weeklyTransactions = getRecentTransactions(7);
  console.log('Last 7 days activity:', weeklyTransactions);
  return weeklyTransactions;
};

export const getMonthlyActivity = () => {
  const monthlyTransactions = getRecentTransactions(30);
  console.log('Last 30 days activity:', monthlyTransactions);
  return monthlyTransactions;
};

// Example 4: Get points summary
export const getActivitySummary = () => {
  const summary = getPointsSummary();
  console.log('Points Summary:', {
    earned: summary.totalEarned,
    spent: summary.totalSpent,
    net: summary.netPoints
  });
  return summary;
};

// Example 5: Different user scenarios
export const getNewUserExperience = () => {
  console.log('New User Data:', newUserData);
  return newUserData;
};

export const getActiveUserExperience = () => {
  console.log('Active User Data:', highActivityUserData);
  return highActivityUserData;
};

export const getPremiumUserExperience = () => {
  console.log('Premium User Data:', premiumUserData);
  return premiumUserData;
};

// Example 6: Edge cases for testing
export const getZeroPointsScenario = () => {
  console.log('Zero Points Scenario:', edgeCaseScenarios.zeroPoints);
  return edgeCaseScenarios.zeroPoints;
};

export const getLongDescriptionScenario = () => {
  console.log('Long Description Scenario:', edgeCaseScenarios.longDescriptions);
  return edgeCaseScenarios.longDescriptions;
};

// Example 7: Category information access
export const getEarningOpportunities = () => {
  console.log('Daily Earning Opportunities:', {
    attendance: pointEarningCategories.attendance.dailyAmount,
    steps10k: pointEarningCategories.stepCounter.amounts[10000],
    dataInput: pointEarningCategories.dataCollection.amounts[3], // 250P
    quiz: pointEarningCategories.surveys.amounts[0] // 200P
  });
  
  return pointEarningCategories;
};

export const getSpendingOptions = () => {
  console.log('Spending Categories:', {
    coffeeRange: pointSpendingCategories.shopping.partners[0], // Starbucks
    serviceTypes: pointSpendingCategories.services.types.map(s => s.name),
    rewardTypes: pointSpendingCategories.rewards.types.map(r => r.name)
  });
  
  return pointSpendingCategories;
};

// Example 8: Simulate different point scenarios for component testing
export const getScenarioForTesting = (scenarioType: 'beginner' | 'active' | 'premium' | 'zero') => {
  switch (scenarioType) {
    case 'beginner':
      return userTypeScenarios.beginner;
    case 'active':
      return userTypeScenarios.active;
    case 'premium':
      return userTypeScenarios.premium;
    case 'zero':
      return edgeCaseScenarios.zeroPoints;
    default:
      return getPointData();
  }
};

// Example 9: Calculate theoretical daily earnings
export const calculateMaxDailyEarnings = () => {
  const daily = pointEarningCategories.stepCounter.amounts[20000] + // 20k steps
               pointEarningCategories.attendance.dailyAmount + // attendance
               pointEarningCategories.dataCollection.amounts[6] + // max data input (800P)
               pointEarningCategories.surveys.amounts[3]; // max quiz (1000P)
  
  console.log('Maximum possible daily earnings:', daily, 'P');
  return daily;
};

// Example 10: Spending simulation
export const simulateShoppingSpree = (budget: number) => {
  const coffee = 4200; // Starbucks
  const meal = 8500; // Convenience store meal
  const supplement = 12000; // Vitamin
  
  const purchases = [];
  let remaining = budget;
  
  if (remaining >= supplement) {
    purchases.push({ item: '비타민', cost: supplement });
    remaining -= supplement;
  }
  
  if (remaining >= meal) {
    purchases.push({ item: '도시락', cost: meal });
    remaining -= meal;
  }
  
  if (remaining >= coffee) {
    purchases.push({ item: '커피', cost: coffee });
    remaining -= coffee;
  }
  
  console.log('Shopping simulation:', {
    budget,
    purchases,
    remaining,
    totalSpent: budget - remaining
  });
  
  return { purchases, remaining };
};

// Example usage function that demonstrates all features
export const demonstrateAllFeatures = () => {
  console.log('=== Point Data Service Demo ===');
  
  // Basic data
  const defaultData = getDefaultPointData();
  
  // Filtered data
  const attendance = getAttendanceHistory();
  const purchases = getPurchaseHistory();
  
  // Time-based data
  const weeklyActivity = getWeeklyActivity();
  
  // Summary
  const summary = getActivitySummary();
  
  // Different user scenarios
  const newUser = getNewUserExperience();
  const activeUser = getActiveUserExperience();
  
  // Category information
  const earningOps = getEarningOpportunities();
  const spendingOps = getSpendingOptions();
  
  // Calculations
  const maxDaily = calculateMaxDailyEarnings();
  const shoppingSim = simulateShoppingSpree(25000);
  
  return {
    defaultData,
    attendance,
    purchases,
    weeklyActivity,
    summary,
    newUser,
    activeUser,
    earningOps,
    spendingOps,
    maxDaily,
    shoppingSim
  };
};

export default {
  getDefaultPointData,
  getAttendanceHistory,
  getPurchaseHistory,
  getWeeklyActivity,
  getMonthlyActivity,
  getActivitySummary,
  getNewUserExperience,
  getActiveUserExperience,
  getPremiumUserExperience,
  getZeroPointsScenario,
  getLongDescriptionScenario,
  getEarningOpportunities,
  getSpendingOptions,
  getScenarioForTesting,
  calculateMaxDailyEarnings,
  simulateShoppingSpree,
  demonstrateAllFeatures
};