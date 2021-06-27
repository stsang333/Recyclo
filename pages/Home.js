import React, {useState}from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NavBar from '../components/NavBar.js';
import CardMenu from '../components/CardMenu.js';

function Home() {
  const [showCardView, setShowCardView] = useState(false)
  return (
    <View>
      <NavBar/>
      {showCardView ? <CardMenu/> : <CardView />}
    </View>
  );
}

export default Home;