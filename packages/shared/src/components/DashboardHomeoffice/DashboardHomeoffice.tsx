// libraries
import { View, Text, StyleSheet } from "react-native";
import React from "react";

// interfaces
import { DashboardHomeofficeInterface } from "../../interfaces/DashboardHomeofficeInterface";

export default function DashboardHomeoffice({
  name,
  amount,
}: DashboardHomeofficeInterface) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.number}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 256,
    gap: 16,
    backgroundColor: "#F5F5F5",
    padding: 24,
    borderRadius: 32,
    marginRight: 16,
  },
  header: {
    fontSize: 24,
  },
  number: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
