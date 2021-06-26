import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<NavBar/>
      
      <StatusBar style="auto" />*/}
      <Home/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
