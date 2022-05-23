import * as React from "react";
import { Text, View } from "react-native";

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
