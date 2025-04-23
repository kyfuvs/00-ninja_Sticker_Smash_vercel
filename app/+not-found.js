import { StyleSheet, Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'
import React from 'react'

const not_found = () => {
  return (
    <>
    {/* <Stack.Screen options={{title:'Error 404 Page Not Found'}}/> */}
    <View style={styles.container}>
      <Link href={'/'} style={styles.button}>
        Home
      </Link>
    </View>
    </>
  )
}

export default not_found

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'black',
  },
  text: {
    color: 'white',
  },
  button:{
    fontSize:18,
    textDecorationLine:'underline',
    color:'#fff',
  }
})
