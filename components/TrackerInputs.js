import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "../common/Input";
export default function TrackerInputs({ onSubmit }) {
  const [caloriesInput, setCaloriesInput] = useState();
  const [proteinInput, setProteinInput] = useState();

  const storeCaloriesInput = (input) => {
    setCaloriesInput(input);
  };
  const storeProteinInput = (input) => {
    setProteinInput(input);
  };
  return (
    <React.Fragment>
      <View style={styles.textContainer}>
        <Text>Add Calories</Text>
        <Text>Add Protein</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          name="Calories"
          onUpdate={storeCaloriesInput}
          value={caloriesInput}
        />
        <Input
          name="Protein"
          onUpdate={storeProteinInput}
          value={proteinInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => (
            onSubmit(caloriesInput, proteinInput),
            setCaloriesInput(""),
            setProteinInput("")
          )}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#B8B8FF",
    flex: 0.1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonContainer: {
    marginTop: 50,
  },
  textContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 150,
  },
});
