import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const about = () => {
  return (
    <View>
      <Text>about</Text>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    text:{
        color:'white',
    }
})