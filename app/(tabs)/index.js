import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import C2_view_text_image from '../Chap/C2_view_text_image'
import { GlobalContext } from '../appContext/globalContext'
import { useTheme } from '@/dark_mode/hook/useTheme';

const Home = () => {
  const { chap } = useContext(GlobalContext);
  const { colors } = useTheme();

  return (
    
    <View style={[styles.container, { backgroundColor: colors.background }]}>
         {chap === 'C2' && <C2_view_text_image />}
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  dd_position: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
