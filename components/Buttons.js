import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Buttons = ({ onPress, title }) => (
  <LinearGradient
    style={styles.container}
    colors={["#024959", "#024959", "#0c6474"]}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 0, y: 1.0 }}
    locations={[0, 0.1, 0.6]}
  >
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 200,
    shadowColor: "#034a5a",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderRadius: 10,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    opacity: 0.8,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "normal",
    alignSelf: "center",
  },
});

export default Buttons;
