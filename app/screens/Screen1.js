import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Screen1 = () => {
  useEffect(() => {
    console.log("salman");
    // fetching();
    // userFetching();
  }, []);

  const fetching = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const userFetching = async () => {
    const config = {
      headers: { Authorization: `Bearer` },
    };

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const posting = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "salman",
        body: "helllllo",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const posting1 = () => {
    const data = JSON.stringify({
      title: "salman",
      body: "helllllo",
      userId: 1,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <Button
        title="Drawer"
        onPress={() => {
          // props.navigation.toggleDrawer()
          posting();
          // posting1();
        }}
      />
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
