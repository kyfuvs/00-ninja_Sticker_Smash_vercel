import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/dark_mode/hook/useTheme'; // adjust path if needed

export default function Show_context_data() {
  const { theme, colors } = useTheme(); // Get values from context

  return (
    <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'orange', textAlign: 'center' }}>
            Context theme: {theme}
        </Text>
        <Text style={{ color: 'orange', textAlign: 'center' }}>
            Context background: {colors.background}
        </Text>
        <Text style={{ color: 'orange', textAlign: 'center' }}>
            Context text color: {colors.text}
        </Text>
    </View>

  );
}
