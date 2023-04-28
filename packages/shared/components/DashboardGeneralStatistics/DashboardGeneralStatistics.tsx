// libraries
import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DashboardGeneralStatistics() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Im Homeoffice</Text>
      <Text style={styles.number}>28</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#F5F5F5",
    padding: 24,
    borderRadius: 32,
  },
  header: {
    fontSize: 24,
  },
  number: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
