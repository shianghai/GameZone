import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


export default function Header({navigation, title}){
    const openMenu = ()=>{
        navigation.openDrawer()
    
    }

    return(
        <ImageBackground 
            source = {require('../assets/game_bg.png')} 
            style={styles.header} 
            imageStyle = {{resizeMode: 'repeat',
            height: '100%', width: '100%'}}>
            <MaterialIcons 
                name= 'menu' size={25} onPress={openMenu} style={styles.icon}
            />
            <View style = {styles.headerTitle}>
                <Image source = {require('../assets/heart_logo.png')} style = {styles.headerLogo}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
           
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon : {
        position: 'absolute',
    
        right: 220     


    },
     headerLogo: {
         width: 15,
         height: 15
     },

     headerTittle: {
         flexDirection: 'row'
     }


})