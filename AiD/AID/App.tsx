/**
 * AiD Main App
 * @format
 */

import React, { useState, useRef } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, ScrollView, Dimensions } from 'react-native';
import { MainPage, OnboardingPage, OnboardingPage2, OnboardingPage3 } from './src/pages';

const { width: screenWidth } = Dimensions.get('window');

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // 0, 1, 2 for the three onboarding pages
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSkip = () => {
    // Skip to MainPage from any onboarding page
    setShowOnboarding(false);
  };

  const handleConfirm = () => {
    // Complete onboarding and go to MainPage
    setShowOnboarding(false);
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentPage(pageIndex);
  };

  const renderOnboardingFlow = () => (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScroll}
      scrollEventThrottle={16}
      style={styles.scrollView}
    >
      <View style={styles.pageContainer}>
        <OnboardingPage 
          onSkip={handleSkip}
          currentStep={currentPage + 1}
          totalSteps={3}
        />
      </View>
      <View style={styles.pageContainer}>
        <OnboardingPage2 
          onSkip={handleSkip}
          currentStep={currentPage + 1}
          totalSteps={3}
        />
      </View>
      <View style={styles.pageContainer}>
        <OnboardingPage3 
          onSkip={handleSkip}
          onConfirm={handleConfirm}
          currentStep={currentPage + 1}
          totalSteps={3}
        />
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {showOnboarding ? renderOnboardingFlow() : <MainPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  pageContainer: {
    width: screenWidth,
  },
});

export default App;
