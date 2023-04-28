// packages/shared/components/TestComponent.js
import React from "react";
import { Text, View } from "react-native";

const TestComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello from Shared Component!
      </Text>
    </View>
  );
};

export default TestComponent;
