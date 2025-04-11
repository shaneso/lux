import { Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react";

export default function Compute() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Features</Text>
      <Text style={styles.text}>Computational tools for tumor analysis</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

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
    borderWidth: 1,
    borderRadius: 20,
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
  },
  textInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    padding: 5,
    textAlign: "center",
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: "#727285",
  },
});
