// Import statements

import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import * as Haptics from "expo-haptics";
import { BlurView } from "expo-blur";

// Root layout for home and analysis tabs

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#727285",
        tabBarBackground: () => <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: () => {
            Haptics.selectionAsync();
            return null;
          },
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="therapy"
        options={{
          title: "Therapy",
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

// Styling

const styles = StyleSheet.create({
  tabBar: {
    height: 150,
    position: "absolute",
    top: 0,
    textAlign: "center",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  tabBarLabel: {
    marginTop: 50,
    fontSize: 15,
    fontWeight: 300,
  },
});
