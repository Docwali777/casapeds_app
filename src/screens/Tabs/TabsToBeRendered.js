
import { Navigation } from 'react-native-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

export default  () =>{

   Promise.all([
       
    Icon.getImageSource('ios-home', 30),
    Icon.getImageSource('ios-clock', 30, 'red'),
    Icon.getImageSource('ios-menu', 30)

   ]).then(image =>{
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'WelcomeToCasaPediatrics', 
                screen: 'WelcomeToCasaPediatrics', 
                title: 'Welcome To Casa Pediatrics', 
                icon: image[0], 
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: image[2],
                            id: 'drawer'
                        }
                    ]
                }
            },
            {
                label: 'OfficeHours', 
                screen: 'OfficeHours',
                title: 'Office Hours', 
                icon: image[1], 
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: image[2],
                            id: 'drawer'
                        }
                    ]
                }
            }
        ], 

        //drawer
        drawer: {
            left: {
                screen: 'leftDrawer'
            }
        }
    })
   })

}