import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

//images
import casaPedsLogo from '../../../images/casaPedsLogo.png'

//import tabs function
import rendertabs from '../Tabs/TabsToBeRendered'

class Home extends React.Component{

    constructor(props){
      super(props)
        // this.props.navigator.setOnNavigatorEvent(this.openDrawer)
    }
  
    // openDrawer = (event) =>{
    //  if(event.type === 'NavBarButtonPress' && event.id === 'homeIcon'){
    //   console.log('button accessed')
    //  }
        
    // }
openTabs = () =>{
  rendertabs()
}

  render(){
    return (
      <View style={styles.homeButton} >
        <View>
            <Image source={casaPedsLogo} />
          </View>


        <TouchableOpacity style={styles.button} onPress={this.openTabs} >
        <View  >
        <Text style={styles.text} > Home </Text>
          </View>
          </TouchableOpacity>
  
        </View>
    )
  }
  }
  
  const styles = StyleSheet.create({
    homeButton: {
      alignItems: 'center'
    }, 
    button: {
      backgroundColor: '#2AFD74', 
      height: 50, 
      justifyContent: 'center', 
      alignItems: 'center',
      width: '40%', 
      borderRadius: 30, 
      marginTop: 50, 
      shadowColor: 'black', 
      shadowOffset: {
        width: 5,
        height: 5
      }, 
      shadowOpacity: 0.5, 
      shadowRadius: 1
    }, 
    text: {
      fontWeight:'bold', 
      fontFamily: 'Arial', 
      fontSize: 25
    }
  
  })

  export default Home