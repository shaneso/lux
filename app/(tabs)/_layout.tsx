import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import * as Haptics from "expo-haptics";
import { BlurView } from "expo-blur";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#727285",
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
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
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    textAlign: "center",
    position: "absolute",
    top: 0,
    height: 150,
    borderColor: "none",
  },
  tabBarLabel: {
    padding: 50,
    fontSize: 15,
  },
});
