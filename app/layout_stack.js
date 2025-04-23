// Project/app/Layout_stack.js
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import Toggler_dark_mode from "../dark_mode/components/toggler_dark_mode";

export default function Layout_stack() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
            headerTitle: "Home",
            // headerRight: () => <ThemeToggleButton />,
            // headerRight: () => <Toggler_dark_mode />,
            // headerStyle: {
            //   backgroundColor: 'black',
            // },
            // headerTintColor: 'white',
          }}
        />
        
        <Stack.Screen
          name="+not-found"
          options={{
            headerTitle: '404 Page Not Found',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack>
    </>
  );
}
