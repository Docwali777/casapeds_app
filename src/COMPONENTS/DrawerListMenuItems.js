import React, { Component } from 'react'

import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'

import { Navigation  } from 'react-native-navigation'

class DrawerListMenuItems extends Component  {


    render(){
        return(
            <TouchableOpacity onPress={this.props.openServiceModal} >
                    <View style={styles.listContainer} >
                        <Text style={styles.listText} >
                            {this.props.name}
                        </Text>
                    </View>
                    </TouchableOpacity>
        )
    }

    
}

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: 'center',
        height: 30,
        marginLeft: 5, 
        marginTop: 10, 
         backgroundColor: '#88dbeb', 
         borderRadius: 40, 
         alignItems: 'center', 
         shadowColor: 'black', 
         shadowOffset: {
            width:  5, 
            height: 5
         }, 
         shadowRadius: 1,
    shadowOpacity: 0.5
    }, 

    listText: {
        fontFamily: 'Times-Roman', 
        fontSize: 20, 
        fontWeight: '100'
    }
})

export default DrawerListMenuItems