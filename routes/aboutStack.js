import { createStackNavigator } from "react-navigation-stack"
import About from '../screens/about'
import React from 'react'
import Header from '../shared/header'



const screen = {
    About: {
        screen: About,
        navigationOptions: ({navigation})=> {
            return(
                {
                    headerTitle: ()=> <Header navigation = {navigation} title='About GameZone'/>
                }
            )
        }
    },
    
}



const AboutStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
       // headerStyle: {}
    }
})

export default AboutStack