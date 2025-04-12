// Import statements

import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";

// About page component function

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>An Illuminate series project</Text>
      <Text style={styles.text}>Developed by Shane So</Text>
      <Link href={"https://github.com/shaneso/lux"} style={styles.footer} onPress={() => Haptics.selectionAsync()}>Learn more</Link>
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
  boldText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
  },
  text: {
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
    padding: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 120,
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
  },
});
