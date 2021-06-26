import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../config/colors.js';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

function NavBar() {
  return (
    <View style={styles.navContainer}>
      <FontAwesome icon={SolidIcons.bomb} style={styles.homeIcon}/>
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
    alignItems: 'center'
  },
  header: {
    color: colors.white,
    fontSize: 30,
    marginTop: '10%'
  }, 
  homeIcon: {
    marginTop: '20%',
    color: colors.white
  }
});

export default NavBar