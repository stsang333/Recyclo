import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "./Home.js";
import { useNavigation } from '@react-navigation/native';

function LoadingScreen() {
  const navigation = useNavigation();

  function navigateToCardMenu() {
    navigation.navigate("Card Menu");
  }

  return (
    <Pressable
      onPress={() => {
        navigateToCardMenu()
      }}
      style={styles.container}
    >
      <View style={styles.back}>
        <Text style={styles.title}>Recyclo</Text>
      </View>
      <Icon name="recycle" style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.white,
  },
  back: {
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "90%",
    top: "-10%",
    left: "5%",
    borderRadius: 40,
  },
  icon: {
    alignSelf: "center",
    fontSize: 200,
    fontWeight: "bold",
    color: "darkgray",
  },
});

export default LoadingScreen;
