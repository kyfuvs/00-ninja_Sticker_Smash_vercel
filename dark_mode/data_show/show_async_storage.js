import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@/dark_mode/hook/useTheme';

export default function Show_async_storage() {
  const [themeFromStorage, setThemeFromStorage] = useState(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const value = await AsyncStorage.getItem('@app_theme');
        if (value !== null) {
          console.log('🧾 Stored theme:', value);
          setThemeFromStorage(value);
        }
      } catch (e) {
        console.error('Error reading theme from AsyncStorage:', e);
      }
    };

    fetchTheme();
  }, [theme]);

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ color: 'blue', fontFamily: 'Courier New' }}>
        {themeFromStorage
          ? JSON.stringify({ theme: themeFromStorage }, null, 2)
          : 'Loading...'}
      </Text>
    </View>
  );
}
