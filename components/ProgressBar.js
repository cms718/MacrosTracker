import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
export default function ProgressBar({ total, current, name }) {
  const widthValue = (current / total) * 100;
  const width = widthValue < 100 ? `${widthValue}%` : "100%";
  return (
    //need to set a max for the width.
    <View style={styles.container}>
      <Text style={styles.labels}>{name}</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressBarFill(width)} />
      </View>
      <Text style={styles.text}>{`${current} / ${total}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#B8B8FF",
    padding: 8,
    marginTop: 70,
  },
  progressBar: {
    height: 20,
    width: "100%",
    backgroundColor: "#22333B",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
  },
  labels: { fontSize: 17, padding: 8 },
  progressBarFill: (width) => ({
    ...StyleSheet.absoluteFill,
    backgroundColor: "#1AFFD5",
    width: width,
  }),
  text: { marginTop: 10 },
});
