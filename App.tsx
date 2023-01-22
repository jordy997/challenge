import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import GlobalNavigation from './src/Navigation/GlobalNavigation';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <GlobalNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
