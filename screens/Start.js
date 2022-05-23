import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

//Starting interface where you are able to chose whether to login if you already have an account
//or to newly register into application

//imported icon and Button component
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Buttons from "../components/Buttons";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

//navigation to Login and Signup pages
const NavigateToLogin = (props) => {
  props.navigation.navigate("Login");
};
const NavigateToSignUp = (props) => {
  props.navigation.navigate("Signup");
};

const Start = (props) => {
  return (
    <View style={styles.centerContainer}>
      <Icon
        name={"home-battery-outline"}
        size={70}
        color={"#055B5C"}
        style={styles.inputIcon}
      />

      <Text style={styles.logoText}>Smart Home App</Text>

      <Buttons title={"Login"} onPress={() => NavigateToLogin(props)}></Buttons>

      <Buttons
        title={"Register"}
        onPress={() => NavigateToSignUp(props)}
      ></Buttons>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    backgroundColor: "#dad1e3",
    height: HEIGHT,
    //width: WIDTH,
  },
  logoText: {
    color: "#8474A1",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  inputIcon: {
    position: "center",
    marginTop: 250,
    left: 37,
  },
});

export default Start;
