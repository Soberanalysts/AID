import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

import { Colors, Typography, Spacing, BorderRadius } from '../constants/colors';

const { width: screenWidth } = Dimensions.get('window');

interface OnboardingPage2Props {
  onSkip?: () => void;
  currentStep?: number;
  totalSteps?: number;
}

const OnboardingPage2: React.FC<OnboardingPage2Props> = ({
  onSkip,
  currentStep = 2,
  totalSteps = 3,
}) => {
  const renderStatusBar = () => (
    <View style={styles.statusBar}>
      <Text style={styles.timeText}>9:41</Text>
      <View style={styles.statusIcons}>
        <View style={styles.signalIcon}>
          <View style={[styles.signalBar, styles.signalBar1]} />
          <View style={[styles.signalBar, styles.signalBar2]} />
          <View style={[styles.signalBar, styles.signalBar3]} />
          <View style={[styles.signalBar, styles.signalBar4]} />
        </View>
        <View style={styles.wifiIcon}>
          <View style={styles.wifiArc} />
          <View style={[styles.wifiArc, styles.wifiArc2]} />
          <View style={[styles.wifiArc, styles.wifiArc3]} />
        </View>
        <View style={styles.batteryIcon}>
          <View style={styles.batteryBody} />
          <View style={styles.batteryTip} />
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.skipButton} 
        onPress={onSkip}
        activeOpacity={0.7}
      >
        <Text style={styles.skipText}>SKIP ›</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProgressIndicators = () => (
    <View style={styles.progressContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.progressDot,
            index < currentStep ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  const renderMainContent = () => (
    <View style={styles.mainContent}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>마이디 4.0은</Text>
        <Text style={styles.mainText}>당신의 데이터가 서버가 아닌</Text>
        <Text style={styles.mainText}>오직 스마트폰에만 저장되며,</Text>
        <Text style={styles.mainText}>모든 정보는 암호화를 통해</Text>
        <Text style={styles.mainText}>안전하게 보호됩니다</Text>
      </View>

      <View style={styles.visualContainer}>
        <View style={styles.securityVisualization} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      {renderStatusBar()}
      {renderHeader()}
      {renderProgressIndicators()}
      {renderMainContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  // Status Bar Styles
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xs,
  },
  timeText: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semiBold,
    color: Colors.black,
    fontFamily: Typography.fontFamily,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  signalIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1,
  },
  signalBar: {
    backgroundColor: Colors.black,
    width: 3,
  },
  signalBar1: {
    height: 4,
  },
  signalBar2: {
    height: 6,
  },
  signalBar3: {
    height: 8,
  },
  signalBar4: {
    height: 10,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    position: 'relative',
  },
  wifiArc: {
    position: 'absolute',
    borderColor: Colors.black,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 8,
  },
  wifiArc2: {
    width: 9,
    height: 7,
    top: 2,
    left: 3,
  },
  wifiArc3: {
    width: 15,
    height: 11,
    top: 0,
    left: 0,
  },
  batteryIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryBody: {
    width: 22,
    height: 11,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 2,
    backgroundColor: Colors.white,
  },
  batteryTip: {
    width: 1,
    height: 4,
    backgroundColor: Colors.black,
    marginLeft: 1,
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.base,
  },
  skipButton: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  skipText: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.medium,
    color: Colors.textGray,
    fontFamily: Typography.fontFamily,
    letterSpacing: 0.5,
  },

  // Progress Indicators Styles
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.sm,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
  },
  activeDot: {
    backgroundColor: Colors.mainBlue5,
  },
  inactiveDot: {
    backgroundColor: Colors.mediumGray,
  },

  // Main Content Styles
  mainContent: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxxl * 2,
  },
  mainText: {
    fontSize: Typography.sizes.xxxl,
    fontWeight: Typography.weights.regular,
    color: Colors.gray8,
    textAlign: 'center',
    lineHeight: Typography.lineHeights.loose,
    fontFamily: Typography.fontFamily,
    marginBottom: Spacing.xs,
  },

  // Visual Elements Styles
  visualContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityVisualization: {
    width: screenWidth * 0.7,
    height: 200,
    backgroundColor: Colors.mediumGray,
    borderRadius: BorderRadius.xl,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default OnboardingPage2;