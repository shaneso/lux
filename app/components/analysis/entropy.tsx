// Shannon entropy analysis
// Tumor heterogeneity

// Import statements

import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import React, {useState, useEffect} from "react";
import * as Haptics from "expo-haptics";

// Features page component function

export default function Flow() {
  // Result value
  var result = 0;

  // Rounded result value
  var roundedResult = 0;

  // Gompertz function input parameters
  const [totalTypes, setTotalTypes] = useState("");
  const [input, setInput] = useState("");
  const [cellProportions, setCellProportions] = useState<number[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Numeric type conversions
  var num_totalTypes = parseInt(totalTypes);

  // Maximum Shannon entropy
  var maxH = Math.log2(num_totalTypes);

  // Notify user
  const notifyUser = () =>
    Alert.alert("Missing data", "Please fill in all input fields", [
      {text: "OK"},
    ]);

  // Display result
  const displayResult = () => {
    // Calculate Shannon entropy value
    for (let i = 0; i < num_totalTypes; i++) {
      result += cellProportions[i] * Math.log2(cellProportions[i]);
    }
    result = -result;

    // Normalized heterogeneity
    var normH = result / maxH;

    // Rounded normalized entropy
    var roundedNormH = Math.round(normH * 10000) / 10000;
    
    let summary = "";
    if (normH <= 0.33) {
      summary = "The tumor has low heterogeneity";
    } else if (normH >= 0.34 && normH <= 0.66) {
      summary = "The tumor has moderate heterogeneity";
    } else if (normH >= 0.67) {
      summary = "The tumor has high heterogeneity";
    }

    roundedResult = Math.round(result * 10000) / 10000;

    if (result != null && result != 0 && !isNaN(result)) {
      Alert.alert("Result",
        "Tumor heterogeneity: " + roundedResult + "\n" +
        "Normalized entropy: " + roundedNormH + "\n" +
        summary, [
        {text: "OK"},
      ]);

      // Clear input values
      setTotalTypes("");
      setCellProportions([]);
      setInput("");
      setIsReady(false);
      result = 0;
    } else {
      notifyUser();
    }
  };

  const handleInput = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const parsedInput = parseFloat(input);
    if (result != null && !isNaN(parsedInput)) {
      setCellProportions(prev => [...prev, parsedInput]); // Add cell proportion input to array
      setInput("");
    } else {
      notifyUser();
    }
  };

  useEffect(() => {
    if (cellProportions.length === num_totalTypes) {
      setIsReady(true);
    }
  }, [cellProportions]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="Total number of cell types"
        placeholderTextColor="#cccccc"
        defaultValue={totalTypes}
        onChangeText={(newText) => {
          if (parseInt(newText) <= 1) {
            Alert.alert("Invalid value", "Please input a number greater than 1", [{text: "OK"}]);
            setIsReady(true);
          } else {
            setTotalTypes(newText);
            setIsReady(false);
          }
        }}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Cell proportion"
        placeholderTextColor="#cccccc"
        defaultValue={input}
        onChangeText={setInput}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <Pressable
      onPress={handleInput}
      style={styles.addPressable}
      disabled={isReady}
      >
        <Text style={styles.addButton}>Add cell proportion</Text>
      </Pressable>
      <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        if (!isNaN(result)) {
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
  addPressable: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    height: 50,
    marginVertical: 20,
    paddingInline: 17,
    borderWidth: 1,
    borderRadius: 12,
  },
  addButton: {
    color: "#000000",
    fontWeight: 300,
    fontSize: 15,
    padding: 10,
    textAlign: "center",
  },
  button: {
    color: "#ffffff",
    fontWeight: 300,
    fontSize: 15,
    padding: 10,
    textAlign: "center",
  },
});
