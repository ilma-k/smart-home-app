import React, { useEffect, useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Temp from "react-native-vector-icons/FontAwesome5";

const Temperaturec = () => {
  const [tempValue, setTempValue] = useState(0);
  useEffect(() => {
    const urlT =
      "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app/SmartHomeApp/temperature.json";

    const fetchTemperature = async () => {
      try {
        const response1 = await fetch(urlT);
        const json1 = await response1.json();
        //console.log(json1.temperature);
        var temp = json1.temperature;
        console.log(typeof temp);
        setTempValue(temp.temperature);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchTemperature();
  }, []);

  var a = tempValue;
  console.log(typeof tempValue);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Room temperature {"   "}
        <Temp size="100" name={"temperature-low"}></Temp>
      </Text>

      <View style={styles.progress}>
        <Text style={styles.paragraph2}>{tempValue} °C</Text>
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
  },
  paragraph: {
    textAlign: "center",
    color: "#055B5C",
    margin: 24,
    fontSize: 30,
    textAlign: "center",
  },
  paragraph2: {
    textAlign: "center",
    color: "#fff",
    margin: 24,
    fontSize: 25,
    textAlign: "center",
  },
});

export default Temperaturec;
