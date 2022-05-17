import React from "react";
import LinearGradient from "expo-linear-gradient";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import Buttons from "./Buttons";
import LightIcon from "react-native-vector-icons/Fontisto";

/*
const temp = {
  url: "../photos/temp.png",
};*/

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

/***
 * 
import temp from "../assets/temp.png";
      <ImageBackground source={temp} style={styles.image}>
       */

const Lightc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Light {"  "}
        <LightIcon name="lightbulb" size="30"></LightIcon>
      </Text>

      <View>
        <Buttons title={"Turn ON"} />
        <Buttons title={"Turn OFF"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4E3DA",
    padding: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // height: HEIGHT,
    // width: WIDTH - 100,
  },

  paragraph: {
    margin: 30,
    textAlign: "center",
    color: "#055B5C",
    fontSize: 30,
    textAlign: "center",
    //fontWeight: "bold",
  },
});

export default Lightc;
