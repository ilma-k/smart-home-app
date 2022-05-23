import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Buttons from "./Buttons";
import LightIcon from "react-native-vector-icons/Fontisto";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Lightc = () => {
  const [lightState, setLightState] = useState(0);

  useEffect(() => {
    const urlM =
      "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app/SmartHomeApp/lightState/lightState.json";

    const fetchState = async () => {
      try {
        const response = await fetch(urlM);
        const json = await response.json();
        //console.log(json.distance);
        var sta = json.state;
        setLightState(sta);
        console.log(sta);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchState();
    console.log("Light state: ", lightState);
  }, [lightState]);

  var bool = false;
  console.log("light", lightState);
  var s = lightState;
  if (s === 1) {
    bool = true;
  } else {
    bool = false;
  }
  console.log(bool);
  const [shouldShow, setShouldShow] = useState(true);
  console.log("Bool", shouldShow);
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
              setShouldShow(false);
            }}
            title={"Turn OFF"}
          />
        ) : (
          <Buttons
            onPress={() => {
              setShouldShow(true);
            }}
            title="Turn ON"
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
