import { Text, View, StyleSheet } from "react-native";

export default function Graph() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flow</Text>
      <Text style={styles.boldText}>Graph page</Text>
      <Text style={styles.text}>Computational tools for tumor analysis</Text>
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
  title: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 30,
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
    padding: 10,
  },
});
