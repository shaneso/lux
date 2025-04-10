import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page not found</Text>
      <Link href={"/"} style={styles.link}>Go back home</Link>
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
  text: {
    color: "#000000",
  },
  link: {
    color: "#000000",
    textDecorationLine: "underline",
  }
});
