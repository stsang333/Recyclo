import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../config/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';

function NavBar() {
  return (
    <View style={styles.navContainer}>
      <Icon name='home' style={styles.homeIcon}/>
      <Text style={styles.header}>Recyclo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
  },
  header: {
    color: colors.white,
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold'
  }, 
  homeIcon: {
    color: colors.white,
    fontSize: 40,
    top: 43,
    left: 40
  }
});

export default NavBar