// Gompertz sigmoidal function analysis
// Volumetric tumor growth over time

// Import statements

import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import React, {useState} from "react";
import * as Haptics from "expo-haptics";

// Features page component function

export default function Regression() {
  // Result value
  var result = 0;

  // Rounded result value
  var roundedResult = 0;

  // Gompertz function input parameters
  const [T, setT] = useState("");
  const [C, setC] = useState("");
  const [r, setr] = useState("");
  const [K, setK] = useState("");
  const [k, setk] = useState("");
  const [s, sets] = useState("");

  // Numeric type conversions
  var num_T = parseFloat(T);
  var num_C = parseFloat(C);
  var num_r = parseFloat(r);
  var num_K = parseFloat(K);
  var num_k = parseFloat(k);
  var num_s = parseFloat(s);

  // Display result
  const displayResult = () => {
    // Calculate estimated tumor volume size
    result = (num_r * num_T * (1 - (num_T / num_K))) - (num_k * ((num_C * num_T) / (num_s + num_T)));

    let summary = "";

    if (result < 0) {
      summary = "CAR-T therapy is effective";
    } else if (result === 0) {
      summary = "The tumor is in a controlled state";
    } else if (result > 0) {
      summary = "Insufficient immune control";
    }

    roundedResult = Math.round(result * 10000) / 10000;

    if (result != null && !isNaN(result)) {
      Alert.alert("Result",
        "Tumor growth rate: " + roundedResult + " cells/day" + "\n" + summary, [
        {text: "OK"},
      ]);
  
      // Clear input values
      setT("");
      setC("");
      setr("");
      setK("");
      setk("");
      sets("");
      result = 0;
    }
  };
  
  // Notify user
  const notifyUser = () =>
    Alert.alert("Missing data", "Please fill in all input fields", [
      {text: "OK"},
    ]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="Tumor cell population (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={T}
        onChangeText={newText => setT(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="CAR-T cell population (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={C}
        onChangeText={newText => setC(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Tumor growth rate (per day)"
        placeholderTextColor="#cccccc"
        defaultValue={r}
        onChangeText={newText => setr(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Carrying capacity (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={K}
        onChangeText={newText => setK(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="CAR-T kill rate (per cell per day)"
        placeholderTextColor="#cccccc"
        defaultValue={k}
        onChangeText={newText => setk(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Half-saturation constant (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={s}
        onChangeText={newText => sets(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (result != null && !isNaN(result)) {
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
    marginVertical: 10,
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
