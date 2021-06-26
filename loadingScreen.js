import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "./config/colors";

function LoadingScreen() {
  return (
    <Pressable
      onPress={() => {
        console.log("The Press is Working!");
      }}
      style={styles.container}
    >
      <View style={styles.back}>
        <Text style={styles.title}>Recyclo</Text>
      </View>
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
    color: colors.primaryShade,
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
});

export default LoadingScreen;
