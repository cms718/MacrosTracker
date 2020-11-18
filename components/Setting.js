import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Input from "../common/Input";

export default function Setting({ name, value, onUpdate }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}> Target {name}</Text>
      <Input value={value} onUpdate={onUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  text: {
    fontSize: 20,
    marginLeft: 40,
  },
});
