// libraries
import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function UserOverview() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.containerLeftText}>21</Text>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.containerRightText}>5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 32,
    minHeight: 256,
  },
  containerLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    width: "48%",
    borderRadius: 32,
  },
  containerLeftText: {
    fontSize: 48,
    fontWeight: "bold",
  },
  containerRight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: "48%",
    borderRadius: 32,
  },
  containerRightText: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
