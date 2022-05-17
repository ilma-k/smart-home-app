import React from "react";
import LinearGradient from "expo-linear-gradient";
import CircularProgress from "react-native-circular-progress-indicator";
import { Text, StyleSheet, View, Dimensions } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import Temp from "react-native-vector-icons/FontAwesome5";

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

const pressButton = () => {
  return console.log("Hello");
};

const Temperaturec = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Room temperature {"   "}
        <Temp size="100" name={"temperature-low"}></Temp>
      </Text>

      <View style={styles.progress}>
        <CircularProgress
          initialValue={24}
          value={0}
          radius={50}
          //duration={200}
          progressValueColor={"#fff"}
          maxValue={50}
          title={"C°"}
          titleColor={"#fff"}
          titleStyle={{ fontWeight: "bold" }}
          activeStrokeColor="white"
          activeStrokeSecondaryColor="#005555"
          inActiveStrokeColor="#1D5C63"
          dashedStrokeConfig={{
            count: 30,
            width: 4,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    height: 170,
    width: 170,
    shadowColor: "#055B5C",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 30,
    backgroundColor: "#1D5C63",
  },

  container: {
    backgroundColor: "#C4E3DA",
    padding: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyItems: "center",
    flexDirection: "row",
    // height: HEIGHT,
    // width: WIDTH - 100,
  },
  paragraph: {
    textAlign: "center",
    color: "#055B5C",
    margin: 24,
    fontSize: 30,
    textAlign: "center",
    //fontWeight: "bold",
  },
});

export default Temperaturec;
