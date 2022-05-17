import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Checkbox = ({
  id,
  btnstyles,
  btnstylesSelect,
  checked,
  selectedIndex,
  onCheckboxChange,
  title,
  choiceText,
  choiceSelected,
}) => {
  return selectedIndex !== id ? (
    <TouchableOpacity
      style={btnstyles}
      onPress={() => {
        onCheckboxChange(id);
      }}
    >
      <Text style={choiceText}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={btnstylesSelect}
      onPress={() => {
        onCheckboxChange(id);
      }}
    >
      <Text style={choiceSelected}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
