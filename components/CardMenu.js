import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import colors from "../config/colors.js";
import Card from "./Card.js";

const CardMenu = () => {
  const [cardList, setCardList] = useState([]);
  //const [cardPressed, setCardPressed] = useState('')

  useEffect(() => {
    setCardList([
      {
        name: "Containers",
        icon: "box-open",
      },
      {
        name: "Utensils",
        icon: "utensils",
      },
      {
        name: "Bottles",
        icon: "wine-bottle",
      },
      {
        name: "Cans",
        icon: "prescription-bottle",
      },
      {
        name: "Bags",
        icon: "shopping-bag",
      },
      {
        name: "Electronics",
        icon: "tablet",
      },
    ]);
  }, []);

  return (
    <View style={styles.cardMenuContainer}>
      <View style={styles.cardMenu}>
        {cardList.map((card) => {
          return <Card name={card.name} icon={card.icon} />;
        })}
      </View>
      <Card name={"FAQ"} icon={"question-circle"} style={styles.faq} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardMenu: {
    //just for aesthetics, adjust as needed
    top: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "90%",
  },
  faq: {
    backgroundColor: colors.secondary,
    alignSelf: "center",
  },
  cardMenuContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});
export default CardMenu;
