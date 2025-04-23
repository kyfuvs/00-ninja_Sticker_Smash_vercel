import { StyleSheet, Image,Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // 👈 import this

const Navbar_Home = () => {
  const router = useRouter(); // 👈 use this
  const W3SCHOOL_LOGO = "https://www.w3schools.com/images/w3schools_logo_436_2.png"
  return (
    <View style={styles.navbar}>
      {/* <Text style={styles.brand}>MyApp</Text> */}
      <Image source={{ uri: W3SCHOOL_LOGO }} style={styles.brand} />

      <View style={styles.links}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pageFolder/cssFolder')}>
          <Text style={styles.link}>CSS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pageFolder/bsFolder')}>
          <Text style={styles.link}>BS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar_Home;

const styles = StyleSheet.create({
  navbar: {
    width: '100vw',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#222',
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  brand: {
    // width: 150,
    // height: 30,
    width: '10vw',
    height: '5vh',
    resizeMode: 'contain',
  },
  
  // brand: {
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
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
