import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import TrackerInputs from "./TrackerInputs";
import { getHistory, getSettings, saveDay } from "../services/settings";

export default function ProgressTable() {
  const [calories, setCalories] = useState();
  const [currentCalories, setCurrentCalories] = useState(0);
  const [protein, setProtein] = useState();
  const [currentProtein, setCurrentProtein] = useState(0);
  const [history, setHistory] = useState();
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  useEffect(() => {
    const { protein, calories } = getSettings();
    const history = getHistory();
    setHistory(history);
    setCalories(calories);
    setProtein(protein);
  }, [settingsModalOpen]);

  const handleSubmit = (calories, protein) => {
    if (calories) {
      const newCalories = currentCalories + parseInt(calories);
      setCurrentCalories(newCalories);
    }
    if (protein) {
      const newProtein = currentProtein + parseInt(protein);
      setCurrentProtein(newProtein);
    } else return;
  };
  const handleCloseModal = () => {
    setSettingsModalOpen(false);
  };
  const handleOpenModal = () => {
    setSettingsModalOpen(true);
  };
  const handleSave = () => {
    const data = {
      calories: {
        target: calories.toString(),
        actual: currentCalories.toString(),
      },
      protein: {
        target: protein.toString(),
        actual: currentProtein.toString(),
      },
    };
    saveDay(data);
    setCurrentCalories(0);
    setCurrentProtein(0);
  };
  return (
    <React.Fragment>
      <Header
        calories={calories}
        protein={protein}
        history={history}
        modalOpen={settingsModalOpen}
        onClose={handleCloseModal}
        onOpen={handleOpenModal}
      />
      <View style={styles.container}>
        <ProgressBar
          current={currentCalories}
          total={calories}
          name="Calories"
        />
        <ProgressBar current={currentProtein} total={protein} name="Protein" />
        <TrackerInputs onSubmit={handleSubmit} />
        <Button title="Finish Day!" onPress={() => handleSave()} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: "#B8B8FF",
  },
});
