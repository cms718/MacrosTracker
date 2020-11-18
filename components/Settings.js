import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SettingsModal from "./SettingsModal";

export default function Settings({
  calories,
  protein,
  modalOpen,
  onClose,
  onOpen,
}) {
  return (
    <React.Fragment>
      {modalOpen && (
        <SettingsModal
          onClose={onClose}
          calories={calories}
          protein={protein}
        />
      )}
      <TouchableOpacity style={styles.icon} onPress={onOpen}>
        <FontAwesome name="cog" size={24} color="black" />
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: "auto",
    marginRight: 30,
    marginTop: 28,
  },
});
