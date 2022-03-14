import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Drawer"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
