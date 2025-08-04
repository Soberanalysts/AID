/**
 * AiD Main App
 * @format
 */

import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { MainPage } from './src';
import OnboardingPage from './src/components/OnboardingPage';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [showOnboarding, setShowOnboarding] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set up 3-second timer to automatically navigate to MainPage
    timerRef.current = setTimeout(() => {
      setShowOnboarding(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSkip = () => {
    // Clear the timer and immediately navigate to MainPage
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowOnboarding(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {showOnboarding ? (
        <OnboardingPage onSkip={handleSkip} />
      ) : (
        <MainPage />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
