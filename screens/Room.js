import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

/**
 * 
        <View style={styles.containerDate}>
          <Text style={styles.textDate}>{date}</Text>
        </View>
 */

import RoomCom from "../components/RoomCom";
import Choice from "../components/Choice";
import Heart from "react-native-vector-icons/Entypo";
import User from "react-native-vector-icons/AntDesign";
import Notify from "react-native-vector-icons/Ionicons";

const choicesHeaders = ["I'm home", "Leaving", "Sleeping", "Vacation"];
const { width: WIDTH } = Dimensions.get("window");
//const { height: HEIGHT } = Dimensions.get("window");

export default function Room({ navigation }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let date =
      today.getDate() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear() +
      "\n" +
      hour +
      ":" +
      minutes;
    setDate(date);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",

          justifyContent: "center",

          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",

            justifyContent: "center",

            margin: 10,

            width: WIDTH - 280,
          }}
        ></View>
        <View style={styles.textCon}>
          <Text style={styles.paragraph}>
            {" "}
            My Home <Heart size="100" name="heart-outlined"></Heart>
          </Text>
        </View>
        <View style={styles.iconsCon}>
          <TouchableOpacity
            style={{
              height: 100,

              justifyContent: "center",

              alignItems: "center",

              width: WIDTH - 250,
            }}
            onPress={() => navigation.navigate("User")}
          >
            <Text style={styles.paragraph}>
              <User name="user" size="200"></User>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerDate}>
        <Text style={styles.textDate}>{date}</Text>
      </View>

      <Text style={styles.subparagraph}>Current state</Text>
      <View style={styles.choiceCon}>
        <Choice
          btnTxtStyles={styles.btnTxtStyles}
          btnstyles={styles.btnstyles}
          btnstylesSelect={styles.btnstylesSelect}
          //onValueChange={handleValueChange}
          choicesCount={choicesHeaders.length}
          choiceText={styles.choiceText}
          choiceSelected={styles.choiceSelected}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 3,
            width: 200,
            backgroundColor: "#005555",
            borderBottomLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        />
      </View>

      <View style={styles.container2}>
        <View style={styles.textCon}>
          <Text style={styles.textRoom}>Rooms</Text>
        </View>
        <View style={styles.containerRoom}>
          <RoomCom
            color1={"#fff"}
            color2={"#ff"}
            color3={"#fff"}
            title={"Living Room"}
            onPress={() => navigation.navigate("SensorPage")}
          ></RoomCom>
          <RoomCom
            color1={"#fff"}
            color2={"#ff"}
            color3={"#fff"}
            title={"Bedroom"}
            onPress={() => navigation.navigate("SensorPageBedroom")}
          ></RoomCom>

          <RoomCom
            color1={"#ff"}
            color2={"#ff"}
            color3={"#fff"}
            title={"Kitchen"}
            onPress={() => navigation.navigate("SensorPageKitchen")}
          ></RoomCom>
        </View>
      </View>
    </View>
  );
}

const checkBoxBaseStyles = {
  height: 60,
  width: 100,
  margin: 8,
};

const labelDimentions = {
  //width: 100,
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
  },
  iconsCon: {},
  titleNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  image: {
    borderRadius: 30,
  },
  container2: {
    backgroundColor: "#fff",
    height: 300,
    width: WIDTH - 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 30,
    borderColor: "#005555",
    borderWidth: 3,
  },
  containerDate: {
    margin: 20,
    width: WIDTH,
    height: 50,
    alignItems: "left",
  },
  containerRoom: {
    flexDirection: "row",
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  choiceCon: {
    margin: 8,
    height: 70,
    flexDirection: "row",
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  textRoom: {
    marginTop: -10,
    margin: 20,
    color: "#005555",
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 17,
    color: "grey",
    textAlign: "left",
  },
  textCon: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  click: {
    height: 100,
    width: 100,
  },
  paragraph: {
    margin: 12,
    textAlign: "auto",
    color: "#055B5C",
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
  subparagraph: {
    margin: 15,
    textAlign: "auto",
    color: "#055B5C",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  btnstyles: {
    ...checkBoxBaseStyles,
    borderWidth: 1,
    borderColor: "#005555",
    borderRadius: 10,
  },
  btnstylesSelect: {
    ...checkBoxBaseStyles,
    backgroundColor: "#005555",
    borderRadius: 10,
  },
  btnTxtStyles: {
    ...labelDimentions,
  },
  choicesHeader: {
    flexDirection: "column",
    alignItems: "left",
  },
  choicesHeaderItem: {
    ...checkBoxBaseStyles,
    textAlign: "center",
    width: 100,
  },
  choiceText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 16,
  },
  choiceSelected: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    textShadowColor: "#fff",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonNav: {
    margin: 25,
  },
});
