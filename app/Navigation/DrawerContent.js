import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View>
                <Text>Salman Ansarii</Text>
              </View>
            </View>
          </View>
          <DrawerItem
            label="Home"
            icon={() => (
              <MaterialCommunityIcons name="home" color="black" size={24} />
            )}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            label="Screen1"
            icon={() => (
              <MaterialCommunityIcons
                name="monitor-screenshot"
                color="black"
                size={24}
              />
            )}
            onPress={() => props.navigation.navigate("Screen1")}
          />
          <DrawerItem
            label="Screen2"
            icon={() => (
              <MaterialCommunityIcons
                name="monitor-screenshot"
                color="black"
                size={24}
              />
            )}
            onPress={() => props.navigation.navigate("Screen2")}
          />
          <DrawerItem
            label="Screen3"
            icon={() => (
              <MaterialCommunityIcons
                name="monitor-screenshot"
                color="black"
                size={24}
              />
            )}
            onPress={() => props.navigation.navigate("Screen3")}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
