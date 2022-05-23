import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";

import Buttons from "./Buttons";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

import Temperaturec from "./Temperaturec";
import Lightc from "./Lightc";
import Motion from "./Motion";

const SensorPageBedroom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Bedroom</Text>

      <View style={styles.tempCon}>
        <Temperaturec />
      </View>
      <View style={styles.tempCon}>
        <Lightc />
      </View>
      <View style={styles.tempCon}>
        <Motion />
      </View>

      <Buttons title={"Back"} onPress={() => navigation.goBack()}></Buttons>
    </View>
  );
};

const styles = StyleSheet.create({
  tempCon: {
    //width: 200,
    //height: 300,
    margin: 30,
    borderRadius: 30,
    shadowColor: "#055B5C",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },

  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    height: HEIGHT,
    width: WIDTH,
    alignItems: "center",
  },
  paragraph: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    color: "#055B5C",
    margin: 24,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SensorPageBedroom;
