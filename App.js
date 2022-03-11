import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./app/Navigation/MainStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import navigatonTheme from "./app/Navigation/navigationTheme";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigatonTheme}>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
