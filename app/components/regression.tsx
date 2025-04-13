// Import statements

import { Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react";

// Regression page component function

export default function Regression() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="Type here"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        keyboardType="numeric"
      />
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
    padding: 30,
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
  },
  numInput: {
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
