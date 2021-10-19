import React, {useState} from 'react'
import * as Font from 'expo-font'
import Home from './screens/home'
import AppLoading from 'expo-app-loading'
import Navigation from './routes/drawer'


const getFonts = ()=>{
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-semibold' : require('./assets/fonts/Nunito-SemiBold.ttf')
  })
}

export default function App() {

const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (  
      <Navigation />
   )
  }
  else {
    return(
      <AppLoading
     startAsync = {getFonts}
     onFinish={()=> setFontsLoaded(true)}
     onError={()=>{console.log('error')}}
     />
    )
  }
  
}
