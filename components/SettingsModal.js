import React from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import ModalHeader from "./ModalHeader";
import UserSettings from "./UserSettings";

export default function SettingsModal({ onClose, calories, protein }) {
  return (
    // saving to a DB with the current calories and protein
    // change the target calories and protein from DB
    // load those values into Tracker.js
    <Modal transparent={true} animationType="fade">
      <View style={styles.modalView}>
        <ModalHeader onClose={onClose} title="Settings" />
        <UserSettings calories={calories} protein={protein} onClose={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 250,
    height: 350,
    backgroundColor: "#9999FF",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
  },
});

// two options, save day & set daily intake
// auto save option?
