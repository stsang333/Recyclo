import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PrettyPressable from './PrettyPressable';
import { useRoute, useNavigation } from '@react-navigation/native';
import NavBar from './NavBar';
//import colors from '../config/colors.js';

const CardView = (props) => {
    //props
    //props.name : one of the 6 cards
    //props.materials : materials list based on the name
    //props.cleaning : constant
    //props.lid : true/false based on the name
    const route = useRoute();
    const name = route.params.cardName;
    console.log(name)

    const whole_dict = {
        'Containers': {
            materials: ['Plastic', 'Cardboard', 'Styrofoam'],

        },
        'Utensils': {
            materials: ['Plastic', 'Metal'],

        },
        'Bottles': {
            materials: ['Plastic', 'Glass', 'Stainless Steel'],

        },
        'Cans': {
            materials: ['Stainless Steel', 'Aluminum'],

        },
        'Bags': {
            materials: ['Plastic', 'Paper'],

        },
        'Electronics': {
            materials: ['Devices', 'Batteries', 'Lightbulb'],

        },
    }

    //may have to be hard coded
    const [materialList, setMaterialList] = useState([]) 
    const cleaningList = ['clean', 'mild', 'dirty']
    

    //based on user entry
    const [materialChosen, setMaterialChosen] = useState('')
    const [cleaningChosen, setCleaningChosen] = useState('')
    //optional
    const [lidStatus, setLidStatus] = useState(false)

    //uncomment if props.materials.map doesn't work
    useEffect(()=>{
        setMaterialList(whole_dict[name]['materials'])
    }, [])

    //when material is chosen
    const onMaterialPress = (name) => {
        setMaterialChosen(name)

    }

    //when cleaning is chosen
    const onCleaningPress = (status) => {
        setCleaningChosen(status)
    }
    
    const onLidPress = (status) => {
        setLidChosen(status)
    }
    
    return (
        <View style={styles.cardView}>
            <NavBar style={styles.nav}/>
            <Text style={styles.title}>You Chose {name}!</Text>

            {/* Materials selection */}
            <View style={styles.question}>
                <Text> What is the material?</Text>
                <View style={styles.questionContainer}>
                    {/* materialList.map */}
                    {materialList.map((material) => {
                        return <PrettyPressable name={material} 
                                                onPress={() => {onMaterialPress(material)}}
                                                active={materialChosen}/>
                    })}
                </View>
            </View>

            {/* Cleaning Selection */}
            <View style={styles.question}>
                <Text>How dirty is the material?</Text>
                <View style={styles.questionContainer}>
                    {cleaningList.map((status) => {
                        return <PrettyPressable name={status} 
                                                onPress={() => {onCleaningPress(status)}}
                                                active={cleaningChosen}/>
                    })}
                </View>
            </View>

            {name=="Bottles" && 
            <View style={styles.question}>
                <Text>Is there a lid?</Text>
                <View style={styles.questionContainer}>
                    <PrettyPressable name='Yes' 
                                        onPress={() => {onLidPress('Yes')}}
                                        active={lidStatus}/>
                    <PrettyPressable name='No' 
                                        onPress={() => {onLidPress('No')}}
                                        active={lidStatus}/>
                </View>
            </View>
            }
            {materialChosen && cleaningChosen && lidStatus && 
            <View style={styles.question}>
                <Text>
                    Rinse the item for 20 seconds. Keep the lid on the item. 
                    Recyle the item in your home recycling container
                </Text>
            </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({

    cardView: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center'
    },

    nav: {
        height: '15%',
    },

    questionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'pink',
        width: 100,
        height: 75,

        margin: 15,
    },
    question: {
        color: 'white', 
        fontSize: 30,
    }

})

export default CardView
