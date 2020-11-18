import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import HistoryModal from "./HistoryModal";
export default function History({ history }) {
  const [modalVisible, setModalVisible] = useState(false);

  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <React.Fragment>
      {modalVisible && <HistoryModal onClose={onClose} history={history} />}
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="history" size={24} color="black" />
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: "auto",
    marginLeft: 30,
    marginTop: 28,
  },
});
