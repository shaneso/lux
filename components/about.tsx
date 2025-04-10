import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Learn more about Lux</Text>
    </View>
  );
}

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
  description: {
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
  },
});
