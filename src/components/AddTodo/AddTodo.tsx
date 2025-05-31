import React from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const AddTodo = ({isActive,onClose,onSubmit,value,onChangeText}:any) => {
  return (
    <Modal style={styles.modal} isVisible={isActive} onBackButtonPress={onClose} onBackdropPress={onClose}>
        <View style={styles.container}>
            <Text style={styles.title}>Add Todo</Text>
            <TextInput style={styles.inputContainer} onChangeText={onChangeText} value={value} placeholder='Enter your todo'/>
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    modal:{
        justifyContent:"flex-end",
        margin:0

    },
    container:{
        gap:20,
        padding:20,
        backgroundColor:"#ffffff",
        borderTopStartRadius:20,
        borderTopEndRadius:20,
    },
    title:{
        fontSize:24,
        color:"#00000",
        fontWeight:"bold"
    },
    inputContainer:{
        borderWidth:2,
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius: 10,
        color:"#00000",
        borderColor:"#000000"
    },
    button:{
          backgroundColor: "#007AFF",
          padding:20,
          borderRadius:10,
          justifyContent:"center",
          alignItems:"center"
          
    },
    buttonText:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
        color:"#ffffff",
    }
})