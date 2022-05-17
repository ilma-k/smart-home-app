import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Checkbox from "./CheckBox";

const ChoicesHeader = ({
  headersName,
  choicesHeaderStyles,
  choicesHeaderItemStyles,
  choiceText,
}) => {
  return (
    <View style={choicesHeaderStyles}>
      {headersName.map((header) => (
        <View style={choicesHeaderItemStyles}>
          <Text>{header}</Text>
        </View>
      ))}
    </View>
  );
};

export default ChoicesHeader;
