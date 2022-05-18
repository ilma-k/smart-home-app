import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";

import Buttons from "./Buttons";
import LightIcon from "react-native-vector-icons/Fontisto";

var value = 0;
var bool;
if (value == 1) {
  bool = true;
} else {
  bool = false;
}
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Lightc = () => {
  const [shouldShow, setShouldShow] = useState(bool);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Light {"  "}
        <LightIcon name="lightbulb" size="30"></LightIcon>
      </Text>
      <View></View>
      <View style={styles.container}>
        {shouldShow ? (
          <Buttons
            onPress={() => {
              if (value == 0) {
                setShouldShow(false);
                value = 1;
              } else {
                setShouldShow(true);
                value = 0;
              }
            }}
            title={"Turn ON"}
          />
        ) : (
          <Buttons
            onPress={() => {
              if (value == 0) {
                setShouldShow(false);
                value = 1;
              } else {
                setShouldShow(true);
                value = 0;
              }
            }}
            title={"Turn OFF"}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4E3DA",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
