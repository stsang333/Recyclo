import React from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../config/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function NavBar() {
  const navigation = useNavigation();

  function navigateToCardMenu() {
    navigation.navigate("Card Menu");
  }

  return (
    <View style={styles.navContainer}>
      <Pressable>
        <Icon name='home' style={styles.homeIcon} onPress={() => {
          navigateToCardMenu()}}/>
      </Pressable>
      <Text style={styles.header}>Recyclo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: '100%',
    height: '12%',
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