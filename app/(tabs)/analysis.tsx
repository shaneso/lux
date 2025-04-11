import { Text, View, StyleSheet } from "react-native";

export default function Analysis() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Analysis</Text>
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
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 20,
  },
  description: {
    color: "#ffffff",
    fontWeight: "300",
    fontSize: 15,
  },
});
