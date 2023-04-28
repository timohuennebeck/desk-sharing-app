import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

// interfaces
import { ConfirmationDataInterface } from "../../interfaces/ConfirmationDataInterface";

export default function ConfirmationData({
  image,
  text,
}: ConfirmationDataInterface) {
  return (
    <View style={styles.container}>
      <Image source={image} accessibilityLabel="Image description" style={styles.containerImage} />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  containerImage: {
    width: 40,
    height: 40,
    backgroundColor: "red",
  }
  });
