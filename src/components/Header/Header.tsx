import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"#007AFF"} barStyle={"light-content"}/>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#007AFF",
        height: 80,
        justifyContent:"center",
        alignItems:"center",
        
    },
    title:{},
    
})