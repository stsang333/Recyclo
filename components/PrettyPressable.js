import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import colors from '../config/colors';

const PrettyPressable = (props) => {
    const [active, setActive] = useState(false)

    useEffect(()=>{
        if (props.active==props.name) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    },[])
    return (
        <Pressable style={active ? styles.activePressable : styles.pressable} onPress={props.onPress}>
            <Text>{props.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        width: 100,
        height: 50, 
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize: 20,
        margin: 15,
        borderRadius: 20,
    },
    activePressable: {
        width: 100,
        height: 50, 
        backgroundColor: colors.primaryShade,
        color: colors.white,
        fontSize: 20,
        margin: 15,
        borderRadius: 20,

    }
})

export default PrettyPressable
