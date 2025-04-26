// Import statements

import { Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react";

// Features page component function

export default function Regression() {
  const [cValue, setCValue] = useState("");
  const [iValue, setIValue] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="C value"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setCValue(newText)}
        defaultValue={cValue}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="I value"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setIValue(newText)}
        defaultValue={iValue}
        keyboardType="numeric"
        selectionColor="#000000"
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
    paddingHorizontal: 50,
  },
  text: {
    color: "#000000",
    fontWeight: "300",
    fontSize: 15,
    textAlign: "justify",
  },
  numInput: {
    color: "#727285",
    backgroundColor: "#fafafa",
    width: "100%",
    height: 50,
    marginVertical: 20,
    textAlign: "justify",
    paddingInline: 17,
    borderRadius: 12,
    borderColor: "#727285",
  },
});
