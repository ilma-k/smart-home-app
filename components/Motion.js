import React from "react";
import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";

//import Switch from "./Switch";
import MotIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeAlert from "react-native-awesome-alerts";

const Motion = () => {
  const [motionSensor, setMotionSensor] = useState(true);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const urlM =
      "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app/SmartHomeApp/motion/distance.json";

    const fetchDistance = async () => {
      try {
        const response = await fetch(urlM);
        const json = await response.json();
        //console.log(json.distance);
        var dis = json.distance;
        setDistance(dis);
        console.log(dis);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDistance();
    console.log("Distance", distance);
  }, [distance]);
  const motionDetected = () => {
    //console.log("State of enable ", motionSensor);
    if (motionSensor) {
      if (distance > 1 && distance < 40) {
        console.log("Distance", distance);
        alert("Motion detected!");
      }
    } else {
      return null;
    }
  };

  motionDetected();
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Motion Sensor {"  "}
        <MotIcon size="30" name="motion-sensor"></MotIcon>
      </Text>

      <View style={styles.container2}>
        <Text style={styles.paragraph2}>Enable sensor</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#005555" }}
          thumbColor={motionSensor ? "#005555" : "#005555"}
          value={motionSensor}
          onValueChange={() => setMotionSensor(!motionSensor)}
        />
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
