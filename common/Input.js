import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ onUpdate, value }) {
  return (
    <React.Fragment>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onUpdate(text)}
        value={value}
        placeholder="0"
        textAlign="center"
      />
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    width: "40%",
    borderRadius: 8,
    backgroundColor: "#D6D6FF",
  },
});
