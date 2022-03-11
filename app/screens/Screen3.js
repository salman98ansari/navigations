import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
