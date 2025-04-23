import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/dark_mode/hook/useTheme';

const C2_view_text_image = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
        <Text style={[styles.title ,styles.text,{color:colors.text}]}>Chap 2</Text>
      <Text style={[styles.text,{color:colors.text}]}>C2_view_text_image</Text>
    </View>
  )
}

export default C2_view_text_image

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'black'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    },
    text:{
        color:'white',
    }
})