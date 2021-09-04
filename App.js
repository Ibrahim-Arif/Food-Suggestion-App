import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';

export default function App() {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside']);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
