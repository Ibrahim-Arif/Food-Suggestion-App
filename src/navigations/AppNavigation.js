import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SuggestionScreen from '../screens/SuggestionScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import Test from '../screens/Test';

const Stack = createStackNavigator();
const AppNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Suggestion" component={SuggestionScreen} />
    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    <Stack.Screen name="Test" component={Test} />
  </Stack.Navigator>
);

export default AppNavigation;
