import React from 'react'
import {Stylesheet, View, Text} from 'react-native'
import { globalStyles } from '../global/styles'


export default function About(){
    return(
      <View style = {globalStyles.titleText}>
            <Text style = {globalStyles.paragraph}>About Screen</Text>
      </View>
        
    )
}

