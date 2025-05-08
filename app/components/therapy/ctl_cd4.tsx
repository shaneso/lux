// Cytotoxic T Lymphocyte growth rate analysis

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

  // CTL-CD4+ function input parameters
  const [T, setT] = useState(""); // Tumor cell population
  const [E, setE] = useState(""); // CTL cell population
  const [k, setk] = useState(""); // CTL cell proliferation rate
  const [d, setd] = useState(""); // CTL cell death rate
  const [p, setp] = useState(""); // CTL cell activation rate
  const [H, setH] = useState(""); // Helper T cell population

  // Numeric type conversions
  var num_T = parseFloat(T);
  var num_E = parseFloat(E);
  var num_k = parseFloat(k);
  var num_d = parseFloat(d);
  var num_p = parseFloat(p);
  var num_H = parseFloat(H);

  // Display result
  const displayResult = () => {
    // Calculate CTL growth rate
    result = (num_k * num_T * num_E) - (num_d * num_E) + (num_p * num_E * num_H);

    roundedResult = Math.round(result * 10000) / 10000;

    let summary = "";

    if (result < 0) {
      summary = "The CTL cell population is decreasing";
    } else if (result === 0) {
      summary = "The CTL cell population is stagnant";
    } else if (result > 0) {
      summary = "The CTL cell population is growing";
    }

    if (result != null && !isNaN(result)) {
      Alert.alert("Result",
        "CTL growth rate: " + roundedResult + " cells/day" + "\n" + summary, [
        {text: "OK"},
      ]);
  
      // Clear input values
      setT("");
      setE("");
      setk("");
      setd("");
      setp("");
      setH("");
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
        placeholder="CTL stimulation rate (per cell per day)"
        placeholderTextColor="#cccccc"
        defaultValue={k}
        onChangeText={newText => setk(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="CTL death rate (per day)"
        placeholderTextColor="#cccccc"
        defaultValue={d}
        onChangeText={newText => setd(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="CTL activation rate (per cell per day)"
        placeholderTextColor="#cccccc"
        defaultValue={p}
        onChangeText={newText => setp(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="CD4⁺ cell population (cells)"
        placeholderTextColor="#cccccc"
        defaultValue={H}
        onChangeText={newText => setH(newText)}
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
