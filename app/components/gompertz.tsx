// Gompertz sigmoidal function analysis page
// Volumetric tumor growth over time

// Import statements

import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import React, {useState} from "react";

// Features page component function

export default function Regression() {
  // Result value
  var result = 0;

  // Gompertz function input parameters
  const [V0, setV0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [beta, setBeta] = useState("");
  const [time, setTime] = useState("");

  // Numeric type conversions
  var num_V0 = parseFloat(V0);
  var num_alpha = parseFloat(alpha);
  var num_beta = parseFloat(beta);
  var num_time = parseFloat(time);

  // Display result
  const displayResult = () =>
    Alert.alert("Result", "" + result, [
      {text: "OK"},
    ]);
  
  // Notify user
  const notifyUser = () =>
    Alert.alert("Missing data", "Please fill in all input fields", [
      {text: "OK"},
    ]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="Initial tumor volume"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setV0(newText)}
        defaultValue={V0}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Growth rate"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setAlpha(newText)}
        defaultValue={alpha}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Deceleration rate"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setBeta(newText)}
        defaultValue={beta}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Time input"
        placeholderTextColor="#cccccc"
        onChangeText={newText => setTime(newText)}
        defaultValue={time}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <Pressable
      onPress={() => {
        result = num_V0 * Math.exp((num_alpha / num_beta) * (1 - Math.exp(-num_beta * num_time)));
        console.log(result);
        if (result != null && Number.isNaN(result) == false) {
          displayResult();
        } else {
          notifyUser();
        }
      }}
      style={styles.pressable}>
        <Text style={styles.button}>Analyze</Text>
      </Pressable>
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
  },
  pressable: {
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 50,
    marginVertical: 20,
    paddingInline: 17,
    borderRadius: 12,
  },
  button: {
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 15,
    padding: 10,
    textAlign: "center",
  },
});
