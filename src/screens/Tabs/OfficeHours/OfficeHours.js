import React from 'react'

import { StyleSheet, Text, View } from 'react-native';


class OfficeHours extends React.Component{

    constructor(props){
      super(props)

      this.props.navigator.setOnNavigatorEvent(this.openDrawer)
        
    }
  
    openDrawer = (event) =>{
     if(event.type === 'NavBarButtonPress' && event.id === 'drawer'){
        this.props.navigator.toggleDrawer()
     }
        
    }
  render(){
    return (
      <View style={styles.container} >
  
    </View>
    )
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    }
  
  })

  export default OfficeHours
