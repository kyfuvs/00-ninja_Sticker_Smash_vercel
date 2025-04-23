import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/dark_mode/hook/useTheme';

export default function Show_context_data() {
  const { theme, colors } = useTheme();

  const contextData = {
    theme,
    colors,
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          color: 'orange',
          fontFamily: 'Courier New',
        //   textAlign: 'center',
          whiteSpace: 'pre-line',
        }}
      >
        {JSON.stringify(contextData, null, 2)}
      </Text>
    </View>
  );
}
