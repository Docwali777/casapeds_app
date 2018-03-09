import React from 'react';


import { Navigation } from 'react-native-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

//screens
import Home from './src/screens/Home/Home'
import WelcomeToCasaPediatrics from './src//screens//Tabs/WelcomeToCasaPediatrics/WelcomeToCasaPediatrics'
import OfficeHours from './src/screens/Tabs/OfficeHours/OfficeHours'
import LeftDrawer from './src/screens/Tabs/LeftDrawer/LeftDrawer';
import Services from './src/screens/Services/Services'

Navigation.registerComponent('WelcomeToCasaPediatrics', () => WelcomeToCasaPediatrics)
Navigation.registerComponent('OfficeHours', ()=> OfficeHours)

Navigation.registerComponent('home', ()=> Home)
Navigation.registerComponent('leftDrawer', () => LeftDrawer)

Navigation.registerComponent('services', () => Services)

const startApp = () =>{
  Promise.all([
    Icon.getImageSource('ios-menu', 30)
  ]).then(img =>{
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'home', 
        label: 'home', 
        title: 'Home', 
      }
    })
  })
}


startApp()