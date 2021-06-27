import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardMenu from '../components/CardMenu';
import NavBar from '../components/NavBar';


const AppStack = createStackNavigator();

export default function navigateToHome() {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }} >
        <AppStack.Screen name="Nav Bar" component={NavBar} />
        <AppStack.Screen name="Card Menu" component={CardMenu} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}