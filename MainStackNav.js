import * as React from "react";
import { View } from "react-native";
import SensorPage from "./SensorPage";
import Room from "./Room";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SensorPageBedroom from "./SensorPageBedroom";
import SensorPageKitchen from "./SensorPageKitchen";

const Stack = createNativeStackNavigator();

const MainStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTransparent: "true",
        headerTitle: "",
      }}
    >
      <Stack.Screen name="Room" component={Room}></Stack.Screen>
      <Stack.Screen name="SensorPage" component={SensorPage}></Stack.Screen>
      <Stack.Screen
        name="SensorPageBedroom"
        component={SensorPageBedroom}
      ></Stack.Screen>
      <Stack.Screen
        name="SensorPageKitchen"
        component={SensorPageKitchen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStackNav;
