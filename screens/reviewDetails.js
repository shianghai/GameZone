import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import { globalStyles, Images } from '../global/styles'
import Card from '../global/card'


export default function ReviewDetails({navigation}){
  
  const rating = navigation.getParam('rating')
    return(
      <View style= {globalStyles.container}>
        <Card>
            <Text style = {globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style = {globalStyles.titleText}>{navigation.getParam('body')}</Text>
            <View style = {styles.rating}>
              <Text>GameZone Rating:</Text>
              <Image source = {Images.ratings[rating]}/>
            </View>
        </Card>
           
      </View>
        
    )
}


const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1
  }
})
