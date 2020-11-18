import React from "react";
import { SafeAreaView, Text, Modal, StyleSheet } from "react-native";
import ModalHeader from "./ModalHeader";
import HistoryList from "./HistoryList";
export default function HistoryModal({ onClose, history }) {
  return (
    <Modal animationType="fade">
      <SafeAreaView style={styles.container}>
        <ModalHeader onClose={onClose} title="History" />
        <HistoryList history={history} />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9999FF",
    flex: 1,
  },
});
