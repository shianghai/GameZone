import { createStackNavigator } from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Home from '../screens/home'
import ReviewDetails from "../screens/reviewDetails"
import Header from "../shared/header"
import React from 'react'


const screen =  {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return(
                {
                headerTitle:  ()=><Header navigation = {navigation} title='GameZone'/>
                }
            )
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails'
        }
    }
}



const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        //headerStyle: {backgroundColor: '#eee'}
    }
})

export default HomeStack