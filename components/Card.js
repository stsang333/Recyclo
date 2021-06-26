import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../config/colors.js';


const Card = (props) => {
    return (
        <View style={styles.card}>
            <Text>{props.name}</Text>
            {/* <Text>{props.icon}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary
    }

})

export default Card
