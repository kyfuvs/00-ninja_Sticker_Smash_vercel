import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; 
import { useTheme } from '@/dark_mode/hook/useTheme';
import DD_chap from '../app/Chap/dd_chap'

const Navbar = () => {
  const router = useRouter(); // 👈 use this
  const W3SCHOOL_LOGO = "https://www.w3schools.com/images/w3schools_logo_436_2.png"
  const NINJA_LOGO="https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB"
  const { colors } = useTheme();
  return (
    <View style={[styles.navbar,{backgroundColor:colors.background}]}>
      {/* <Text style={styles.brand}>MyApp</Text> */}
      <Image source={{ uri: NINJA_LOGO }} style={styles.brand} />

      <View style={styles.links}>
        <DD_chap/>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pageFolder/cssFolder')}>
          <Text style={styles.link}>CSS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pageFolder/bsFolder')}>
          <Text style={styles.link}>BS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pageFolder/stackFolder')}>
          <Text style={styles.link}>Stack</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: '90vw',
    flexDirection: 'row',
    justifyContent:'flex-start',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: colors.background,
    // backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  brand: {
    // width: 150,
    // height: 30,
    // width: '10vw',
    // height: '5vh',
    // resizeMode: 'contain',
  
      width: 70,      // previously '10vw', now in pixels
      height: 50,      // previously '5vh', now in pixels
      resizeMode: 'contain',

    
  },
  
  // img: {
  //   width:'100%',
  // },
  links: {
    flexDirection: 'row',
    gap: 15,
  },
  link: {
    color: '#ffcc00',
    fontSize: 16,
    marginLeft: 15,
  },
});
