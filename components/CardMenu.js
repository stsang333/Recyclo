import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../config/colors.js';
import Card from './Card.js';

const CardMenu = () => {
    const [cardList, setCardList] = useState([])
    useEffect(()=>{
        setCardList([{
            name: "Containers",
            icon: ""
        },
        {
            name: "Utensils",
            icon: ""
        },
        {  
            name: "Bottles",
            icon: ""
        },
        {
            name: "Cans",
            icon: ""
        },
        {
            name: "Electronics",
            icon: ""
        }])
    }, [])
        
        
    
    return (
        <View>
            {cardList.map((card) => {
                return <Card name={card.name} icon={card.icon} />
            })}
            
        </View>
    )
}

export default ButtonMenu
