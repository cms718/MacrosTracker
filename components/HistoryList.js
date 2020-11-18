import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function HistoryList({ history }) {
  const renderTextColor = (act, tar) => {
    const actual = parseInt(act);
    const target = parseInt(tar);
    const percent = Math.abs((actual - target) / target) * 100;
    return percent <= 5 ? { color: "green" } : { color: "red" };
  };
  const Item = ({ date, calories, protein }) => {
    return (
      // within 5% of value = green?
      <SafeAreaView style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 16, marginTop: 8 }}>{date}</Text>
          <View style={styles.amountsContainer}>
            <Text style={renderTextColor(calories.actual, calories.target)}>
              Calories: {calories.actual} / {calories.target}
            </Text>
            <Text style={renderTextColor(protein.actual, protein.target)}>
              Protein: {protein.actual} / {protein.target}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <Item date={item.date} calories={item.calories} protein={item.protein} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 0.8,
  },
  itemContainer: {
    justifyContent: "center",
    margin: 20,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    height: 70,
    borderRadius: 6,
  },
  textContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  text: {
    color: "green",
  },
  amountsContainer: {},
});
