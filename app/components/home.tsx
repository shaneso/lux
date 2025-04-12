// Import statements

import { Text, View, StyleSheet } from "react-native";

// Home page component function

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lux</Text>
      <Text style={styles.text}>Computational tools for tumor analysis</Text>
    </View>
  );
}

// Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 40,
    padding: 10,
  },
  boldText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
    // padding: 10,
  },
});
