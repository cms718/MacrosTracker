import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import Settings from "./Settings";
import History from "./History";
export default function Header({
  calories,
  protein,
  history,
  modalOpen,
  onOpen,
  onClose,
}) {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.header}>
        <History history={history} />
        <View style={styles.headerText}>
          <Text style={styles.font}>Tracker</Text>
        </View>
        <Settings
          calories={calories}
          protein={protein}
          modalOpen={modalOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </SafeAreaView>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B8B8FF",
    flexDirection: "row",
    flex: 0.1,
  },
  font: {
    color: "#2B193D",
    fontSize: 38,
  },
  headerText: {
    justifyContent: "center",
  },
});
