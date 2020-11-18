import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import Setting from "./Setting";
import { updateSettings } from "../services/settings";

export default function UserSettings({ calories, protein, onClose }) {
  const [targetCalories, setTargetCalories] = useState();
  const [targetProtein, setTargetProtein] = useState();

  useEffect(() => {
    setTargetCalories(calories.toString());
    setTargetProtein(protein.toString());
  }, []);

  const handleUpdateCalories = (text) => {
    setTargetCalories(text);
  };

  const handleUpdateProtein = (text) => {
    setTargetProtein(text);
  };

  const handleSave = () => {
    updateSettings(targetCalories, targetProtein);
    onClose();
  };
  return (
    <View style={styles.container}>
      <Setting
        name="Calories"
        value={targetCalories}
        onUpdate={handleUpdateCalories}
      />
      <Setting
        name="Protein"
        value={targetProtein}
        onUpdate={handleUpdateProtein}
      />
      <Button
        title="Save"
        onPress={() => {
          handleSave();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    margin: 12,
  },
});

//button, two input boxs, store state here.
