import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "@rneui/base";

const RoomCom = ({ onPress, title, color1, color2, color3 }) => (
  <LinearGradient
    style={styles.container}
    colors={[color1, color2, color3]}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 0, y: 1.0 }}
    locations={[0, 0, 0.9]}
  >
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#005555",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 150,
    shadowColor: "#fff",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textAlign: "center",
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    opacity: 0.8,
    textAlign: "center",
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "400",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default RoomCom;
