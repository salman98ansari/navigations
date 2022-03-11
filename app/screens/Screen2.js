import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
