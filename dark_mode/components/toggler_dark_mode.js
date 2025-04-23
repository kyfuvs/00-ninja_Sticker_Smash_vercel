// Project/dark_mode/components/Toggler_dark_mode.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hook/useTheme';
import { Ionicons } from '@expo/vector-icons';

export default function Toggler_dark_mode() {
//   const { colors, toggleTheme } = useTheme();
const { theme, toggleTheme, colors } = useTheme();

  return (
    // <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.primary }]}>
    //   <Text style={[styles.buttonText, { color: colors.background }]}>🌓</Text>
    // </TouchableOpacity>
    // <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.primary }]}>
    <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.background }]}>  
      <Ionicons
        name={theme === 'light' ? 'moon' : 'sunny'}
        size={22}
        color={colors.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
//   button: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//     marginRight: 10,
//   },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
