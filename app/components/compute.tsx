import { Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react";

export default function Compute() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 40,
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
  textInput: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    padding: 5,
    textAlign: "center",
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: "#727285",
    paddingLeft: 10,
  },
});
