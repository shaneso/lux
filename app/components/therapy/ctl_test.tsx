// CTL immunotherapy response efficacy analysis

// Import statements

import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import React, {useState} from "react";
import * as Haptics from "expo-haptics";

// Features page component function

export default function CTL_Test() {
  // Result value
  var result = 0;

  // Rounded result value
  var roundedResult = 0;

  // CTL therapy function input parameters
  const [T, setT] = useState(""); // Tumor cell population
  const [E, setE] = useState(""); // CTL cell population
  const [a, seta] = useState("");
  const [K, setK] = useState("");
  const [n, setn] = useState("");

  // Numeric type conversions
  var num_T = parseFloat(T);
  var num_E = parseFloat(E);
  var num_a = parseFloat(a);
  var num_b = 1 / parseFloat(K);
  var num_n = parseFloat(n);

  // Display result
  const displayResult = () => {
    // Calculate tumor growth rate with CTL therapy treatment
    result = (num_a * num_T * (1 - num_b * num_T)) - (num_n * num_E * num_T);

    let summary = "";

    if (result < 0) {
      summary = "CTL therapy is effective";
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
      setE("");
      seta("");
      setK("");
      setn("");
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
        placeholder="CTL cell population (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={E}
        onChangeText={newText => setE(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Tumor growth rate (per day)"
        placeholderTextColor="#cccccc"
        defaultValue={a}
        onChangeText={newText => seta(newText)}
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
        placeholder="CTL kill rate (per cell per day)"
        placeholderTextColor="#cccccc"
        defaultValue={n}
        onChangeText={newText => setn(newText)}
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
