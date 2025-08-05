import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AlarmPage from './AlarmPage';

/**
 * Example page demonstrating the AlarmPage component usage
 * This shows how to integrate the alarm functionality into your app
 */
const AlarmExamplePage: React.FC = () => {
  const handleGoBack = () => {
    // In a real app, this would navigate back to the previous screen
    Alert.alert('Back', 'Going back to previous screen');
  };

  const handleDeleteAll = () => {
    // In a real app, this might update global state or call an API
    Alert.alert('Delete All', 'All notifications have been deleted');
  };

  return (
    <View style={styles.container}>
      <AlarmPage 
        onGoBack={handleGoBack}
        onDeleteAll={handleDeleteAll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlarmExamplePage;