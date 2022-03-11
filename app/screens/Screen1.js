import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
