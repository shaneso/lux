import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page not found</Text>
      <Link href={"./(tabs)"} style={styles.link} onPress={() => Haptics.selectionAsync()}>Go back home</Link>
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
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  link: {
    color: "#000000",
    textDecorationLine: "underline",
  }
});
