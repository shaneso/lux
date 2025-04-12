// Import statements

import { Text, View, StyleSheet } from "react-native";

// Flow page component function

export default function Flow() {
  return (
    <View style={styles.container}>
    </View>
  );
}

// Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#000000",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    position: "absolute",
    top: 0,
    marginTop: 150,
    color: "#000000",
    fontWeight: "500",
    fontSize: 15,
    padding: 10,
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
