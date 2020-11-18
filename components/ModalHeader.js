import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ModalHeader({ onClose, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onClose()} style={styles.button}>
        <FontAwesome name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginRight: "auto",
    margin: 22,
  },
  title: {
    margin: 12,
    marginRight: "38%",
    fontSize: 32,
  },
});
