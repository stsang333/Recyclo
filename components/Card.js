<<<<<<< HEAD
import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import colors from '../config/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

{/* <Icon name="home" style={styles.homeIcon}/> */}

const Card = (props) => {
    return (
        <Pressable style={styles.card} onPress={props.onPress}>
            <Icon name={props.icon} size={50} style={styles.icon}/>
            {/* <Text style={{fontFamily: 'fontawesome', fontSize: 20}}>&#xf49e;</Text> */}
            <Text style={styles.name}>{props.name}</Text>
        </Pressable>
    )
}
=======
import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import colors from "../config/colors.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ParseIconFromClassName } from "react-native-fontawesome";

{
  /* <Icon name="home" style={styles.homeIcon}/> */
}

const Card = (props) => {
  //should prob move this to CardMenu
  const openCard = () => {
    console.log(props.name);
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        openCard();
      }}
    >
      <Icon name={props.icon} size={50} style={styles.icon} />
      {/* <Text style={{fontFamily: 'fontawesome', fontSize: 20}}>&#xf49e;</Text> */}
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
};
>>>>>>> 522c87f0b23b45f5af17c76d05bf86e4c0311237

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
    borderRadius: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    margin: 15,
  },
  icon: {
    //width: 60,
    //height: 50,

    bottom: 10,

    //backgroundColor: colors.primaryShade,
    color: colors.white,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    color: colors.white,
  },
});

export default Card;
