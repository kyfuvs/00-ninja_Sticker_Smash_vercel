import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native-web';
import { useTheme } from '@/dark_mode/hook/useTheme'; // 👈 import your custom theme context

export default function Show_async_storage() {
  const [value, setValue] = useState(null);
  const { theme } = useTheme(); // 👈 this is the theme from context, like "light" or "dark"


  const viewThemeFromStorage = async () => {
    try {
      const storedValue = await AsyncStorage.getItem('@app_theme');
      setValue(storedValue); // this updates the UI
      console.log('🧾 Stored theme:', storedValue);
    } catch (e) {
      console.error('Error reading theme from AsyncStorage:', e);
    }
  };

  // Load the theme once when the component mounts
  useEffect(() => {
    viewThemeFromStorage();
  }, [theme]);

  return (
    <View>
      <Text style={{color:'blue'}}>
        {value ? `Stored theme: ${value}` : 'Loading...'}
      </Text>
    </View>
  );
}
