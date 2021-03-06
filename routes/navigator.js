import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import LoadingScreen from '../pages/LoadingScreen.js';
import CardMenu from '../components/CardMenu';
import CardView from '../components/CardView';

const AppStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }} >
        <AppStack.Screen name="Loading Screen" component={LoadingScreen} />
        <AppStack.Screen name="Card Menu" component={CardMenu} />
        <AppStack.Screen name="Card View" component={CardView} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}