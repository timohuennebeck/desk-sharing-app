import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function GeneralButton({ text }: { text: string }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.containerText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#F2F2F2",
    minHeight: 48,
    maxHeight: 48,
  },
  containerText: {
    textAlign: "center",
  },
});
