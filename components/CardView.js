import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PrettyPressable from './PrettyPressable';

const CardView = (props) => {
    //may have to be hard coded
    const [materialList, setMaterialList] = useState([]) 
    const cleaningList = ['clean', 'mild', 'dirty']
    //optional
    const [lidStatus, setLidStatus] = useState(false)

    //based on user entry
    const [materialChosen, setMaterialChosen] = useState('')
    const [cleaningChosen, setCleaningChosen] = useState('')

    //uncomment if props.materials.map doesn't work
    // useEffect(()=>{
    //     setMaterialList(props.materials)
    // }, [])

    //when material is chosen
    const onMaterialPress = (name) => {
        setMaterialChosen(name)
    }

    //when cleaning is chosen
    const onCleaningPress = (status) => {
        setCleaningChosen(status)
    }
    
    return (
        <View>
            <Text>You Chose {props.name}!</Text>

            {/* Materials selection */}
            <View style={styles.questionContainer}>
                {/* materialList.map */}
                {props.materials.map((material) => {
                    return <PrettyPressable name={material.name} 
                                            onPress={onMaterialPress(material.name)}/>
                })}
            </View>

            {/* Cleaning Selection */}
            <View style={styles.questionContainer}>
                {cleaningList.map((status) => {
                    return <PrettyPressable name={cleaning.status} 
                                            onPress={onCleaningPress(cleaning.status)}/>
                })}
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    questionContainer: {
        display: 'flex',
        flexDirection: 'row'

    },
})

export default CardView
