import { TodoData } from '@/src/app'
import AntDesign from '@expo/vector-icons/AntDesign'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TodoCard = ({title,time,isCompleted}:TodoData) => {
  const [isActive,setIsActive] = useState(isCompleted)
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={()=>setIsActive(!isActive) }>
      <View style={styles.todoContainer}>
        <AntDesign name={isActive? 'checkcircle':"checkcircleo"} size={24}/>
        <Text style={[isActive?styles.inactiveTitle:styles.title]}>{title}</Text>
      </View>
      <Text style={[styles.time,isActive&&{color:"#7A7777"}]}>{time}</Text>
    </TouchableOpacity>
  )
}

export default TodoCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(32,31,31,0.2)",
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:8,
        alignItems:"center",
    },
    todoContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    title:{
        fontSize:18,
        fontWeight:"400",
        color:"#000000"
    },
    time:{
         fontSize:12,
        fontWeight:"400",
        color:"#000000"
    },
    inactiveTitle:{
      fontSize:18,
        fontWeight:"400",
        color:"#000000",
        textDecorationLine:"line-through"
    }
})