import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DD_chap from './Chap/dd_chap';
import C2_view_text_image from './Chap/C2_view_text_image';

export default function Index() {
  const [chap, setChap] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.dd_position}>
        <DD_chap value={chap} setValue={setChap} />
      </View>

      <View style={styles.text}>
        {chap === 'C2' && <C2_view_text_image />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
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
