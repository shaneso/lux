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

  // First order derivative
  // Rate of tumor volume change
  var growthRate = 0;

  // Second order derivative
  // Tumor growth rate curvature
  var growthCurvature = 0;

  // Tumor carrying capacity
  var carryingCapacity = 0;

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
  const displayResult = () => {
    // Calculate estimated tumor volume size
    result = num_V0 * Math.exp((num_alpha / num_beta) * (1 - Math.exp(-num_beta * num_time)));
    // Calculate estimated rate of growth of tumor volume size
    growthRate = result * num_alpha * Math.exp(-num_beta * num_time);
    // Calculate estimated tumor volume growth rate curvature
    growthCurvature = num_alpha * Math.exp(-num_beta * num_time) * result * (num_alpha * Math.exp(-num_beta * num_time) - num_beta);
    // Calculate estimated tumor carrying capacity
    carryingCapacity = num_V0 * Math.exp(num_alpha / num_beta);

    if (result != null && !isNaN(result)) {
      Alert.alert("Result",
        "Estimated tumor size: " + result + " cm\u00B3" + "\n\n" +
        "Tumor growth rate: " + growthRate + " cm\u00B3/day" + "\n\n" +
        "Tumor growth acceleration: " + growthCurvature + " cm\u00B3/day\u00B2" + "\n\n" +
        "Carrying capacity: " + carryingCapacity + " cm\u00B3"
        , [
        {text: "OK"},
      ]);
  
      // Clear input values
      setV0("");
      setAlpha("");
      setBeta("");
      setTime("");
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
        placeholder="Initial tumor volume (cm³)"
        placeholderTextColor="#cccccc"
        defaultValue={V0}
        onChangeText={newText => setV0(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Growth rate (per day)"
        placeholderTextColor="#cccccc"
        defaultValue={alpha}
        onChangeText={newText => setAlpha(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Deceleration rate (per day)"
        placeholderTextColor="#cccccc"
        defaultValue={beta}
        onChangeText={newText => setBeta(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Time input (in days)"
        placeholderTextColor="#cccccc"
        defaultValue={time}
        onChangeText={newText => setTime(newText)}
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
