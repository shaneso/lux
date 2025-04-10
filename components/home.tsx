import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Welcome to Lux</Text>
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
