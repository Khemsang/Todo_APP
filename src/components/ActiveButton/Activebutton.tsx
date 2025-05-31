import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const ActiveButton = ({onPress}: {onPress: any}) => {
  return (
    <TouchableOpacity style={styles.button}>

        <MaterialIcons style={styles.MaterialIcons} name='add'/>
    </TouchableOpacity>
  )
}

export default ActiveButton

const styles = StyleSheet.create({

    button:{
        backgroundColor:"#007AFF",
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        bottom:100,
        right:18,
        width: 80,
        height:80,
        borderRadius:80
   
    },
    MaterialIcons:{
        fontSize:40,
        color:"#ffffff"
    },
})