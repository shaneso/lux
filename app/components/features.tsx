// Import statements

import { Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react";

// Features page component function

export default function Features() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Linear-Parallel Ratio</Text> */}
      <TextInput
        style={styles.numInput}
        placeholder="Input"
        placeholderTextColor="#f5f5f5"
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
    padding: 30,
  },
  text: {
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
    textAlign: "justify",
  },
  numInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    padding: 5,
    textAlign: "center",
    borderRadius: 10,
    boxShadow: "7px 7px 13px #f5f5f5, -7px -7px 13px #ffffff"
  },
});
