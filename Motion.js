import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";

import Buttons from "./Buttons";
import Switch from "./Switch";
import MotIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Motion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Motion Sensor {"  "}
        <MotIcon size="30" name="motion-sensor"></MotIcon>
      </Text>

      <View style={styles.container2}>
        <Text style={styles.paragraph2}>Enable sensor</Text>
        <Switch />
        <View style={styles.container2}>
          <Buttons title={"Notifications"} />
        </View>
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
    //height: HEIGHT,
    // width: WIDTH - 100,
  },

  container2: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  paragraph: {
    margin: 30,
    textAlign: "center",
    color: "#055B5C",
    fontSize: 30,
    textAlign: "center",
  },
  paragraph2: {
    margin: 10,
    textAlign: "center",
    color: "#055B5C",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Motion;
