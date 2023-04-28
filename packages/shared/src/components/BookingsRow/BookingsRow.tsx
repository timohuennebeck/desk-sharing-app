// libraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// interfaces
import { BookingsRowInterface } from "../../interfaces/BookingsRowInterface";

export default function BookingsRow({
  location,
  date,
  time,
}: BookingsRowInterface) {
  return (
    <View style={styles.row}>
      <Text style={styles.column}>{location}</Text>
      <Text style={styles.column}>{date}</Text>
      <Text style={styles.column}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
});
