import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FetchData = () => {
  const [distance, setDistance] = useState(0);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const urlM =
      "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app/SmartHomeApp/motion/distance.json";

    const urlT =
      "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app/SmartHomeApp/temperature.json";
    const fetchDistance = async () => {
      try {
        const response = await fetch(urlM);
        const json = await response.json();
        console.log(json.distance);
        var dis = json.distance;
        setDistance(dis);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchTemperature = async () => {
      try {
        const response1 = await fetch(urlT);
        const json1 = await response1.json();
        console.log(json1.temperature);
        var temp = json1.temperature;
        setTemperature(temp);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchDistance();
    fetchTemperature();
  }, []);

  return (
    <View style={style.dummyContainer}>
      <Text>Information from the motion sensor : {distance}</Text>
      <Text>
        Information from the temperature sensor: {temperature.temperature}
      </Text>
    </View>
  );
};

export default FetchData;

const style = StyleSheet.create({
  dummyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
});
