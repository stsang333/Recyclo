import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import colors from '../config/colors';

const PrettyPressable = (props) => {
    return (
        <Pressable style={styles.pressable} onPress={props.onPress}>
            {props.name}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        width: 20,
        height: 10, 
        backgroundColor: colors.primary,
        color: colors.white
    }
})

export default PrettyPressable
