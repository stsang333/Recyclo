import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import Home from './pages/Home.js';
import LoadingScreen from './pages/LoadingScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './routes/navigator.js';

export default function App() {
  return (
      <Navigator />
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
