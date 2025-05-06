// Shannon entropy analysis
// Tumor heterogeneity

// Import statements

import { Text, TextInput, View, StyleSheet, Pressable, Alert } from "react-native";
import React, {useState, useEffect} from "react";

// Features page component function

export default function Flow() {
  // Result value
  var result = 0;

  // Gompertz function input parameters
  const [totalTypes, setTotalTypes] = useState("");
  const [input, setInput] = useState("");
  const [cellProportions, setCellProportions] = useState<number[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Numeric type conversions
  var num_totalTypes = parseFloat(totalTypes);

  // Display result
  const displayResult = () => {
    const description = "";
    switch (result) {
      case result :
        
        break;
    
      default:
        break;
    }
    Alert.alert("Shannon Entropy", result + "", [
      {text: "OK"},
    ]);
  };

  // Notify user
  const notifyUser = () =>
    Alert.alert("Missing data", "Please fill in all input fields", [
      {text: "OK"},
    ]);

  const handleInput = () => {
    const parsedInput = parseFloat(input);
    if (result != null && !isNaN(parsedInput)) {
      setCellProportions(prev => [...prev, parsedInput]); // Add cell proportion input to array
      // cellProportions.push(parsedInput);
      setInput(""); // Clear input value
      console.log(cellProportions);
    } else {
      notifyUser();
    }
  };

  useEffect(() => {
    if (cellProportions.length === num_totalTypes) {
      setIsReady(true);
      console.log("Updated: " + cellProportions);
    }
  }, [cellProportions]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numInput}
        placeholder="Total number of cell types"
        placeholderTextColor="#cccccc"
        defaultValue={totalTypes}
        onChangeText={newText => setTotalTypes(newText)}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <TextInput
        style={styles.numInput}
        placeholder="Cell proportion per type"
        placeholderTextColor="#cccccc"
        defaultValue={input}
        onChangeText={setInput}
        keyboardType="numeric"
        selectionColor="#000000"
      />
      <Pressable
      onPress={handleInput}
      style={styles.pressable}
      disabled={isReady}
      >
        <Text style={styles.button}>Add</Text>
      </Pressable>
      <Pressable
      onPress={() => {
        if (!isNaN(result)) {
          for (let i = 0; i < num_totalTypes; i++) {
            result += cellProportions[i] * Math.log2(cellProportions[i]);
          }
          result = -result;
          console.log(result);
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
