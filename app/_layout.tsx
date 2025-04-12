// Import statements

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Root layout for main tabs

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
            headerLeft: () => <></>,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
