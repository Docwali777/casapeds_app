import React from 'react'

import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'

import DrawerListMenuItems from '../../../COMPONENTS/DrawerListMenuItems'

import { Navigation } from 'react-native-navigation'

const LeftDrawer  = () =>{


    openServiceModal = () =>{
        Navigation.showModal({
            screen: 'services', 
            animationType: 'slide-left'
        })
    }

    return(
            <View style={styles.container} >

            <DrawerListMenuItems name={'Services'} openServiceModal={this.openServiceModal} />
            <DrawerListMenuItems name={'Healthcare Providers'} />
                

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 50,
        width: '80%', 
        marginLeft: '10%'
    }
})

export default LeftDrawer