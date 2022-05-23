import React, { cloneElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*
This JavaScript file introduces navigation and works as a stack for screens
*/

//screens
import Password from "./screens/Password";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Start from "./screens/Start";
import User from "./screens/User";
import Room from "./screens/Room";
import SensorPage from "./components/SensorPage";
import SensorPageBedroom from "./components/SensorPageBedroom";
import SensorPageKitchen from "./components/SensorPageKitchen";

//variable to define stack for navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: "true",
          headerTitle: "",
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="User" component={User} />
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
        <Stack.Screen name="Password" component={Password}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
