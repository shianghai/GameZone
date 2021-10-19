import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {globalStyles } from '../global/styles'
import Card from '../global/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'






export default function Home({navigation}){

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        {title: 'zelda, Breath of fresh air', rating: 5, body: 'lorem ipsum', key:1},
        {title: 'shanghai, Good coder', rating: 2, body: 'react native', key:2},
        {title: 'we are reporting the teacher', rating: 1, body: 'he is a big ool fool', key:3},
    ])

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentReviews) => {
            return[review, ...currentReviews]
        })
        setModalOpen(false)
    }

    



    return(
        <View style= {globalStyles.container}>
            <Modal visible = {modalOpen} animationType = {'slide'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style = {styles.modalContent}> 
                    <MaterialIcons
                        name = 'close'
                        size = {24}
                        onPress = {() => setModalOpen(false)}
                        style = {{...styles.modalToggle, ...styles.modalClose}}
                    />
                    
                    <ReviewForm addReview = {addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
            name = 'add'
            size = {24}
            onPress = {() => setModalOpen(true)}
            style = {styles.modalToggle}/>

           <FlatList 
                data = {reviews}
                renderItem = {({item})=>(
                    <TouchableOpacity onPress={()=>(navigation.navigate('ReviewDetails', item))}>
                        <Card>
                            <Text style = {globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
           />
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        padding: 10, 
        alignSelf: 'center'

    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },

    modalContent: {
      flex: 1

    },
})

