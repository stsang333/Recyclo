import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NavBar from '../components/NavBar.js';
import CardMenu from '../components/CardMenu.js';

function Home() {
  return (
    <View>
      <NavBar/>
      <CardMenu/>
    </View>
  );
}

export default Home;