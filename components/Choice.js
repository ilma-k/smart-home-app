import * as React from "react";
import { View } from "react-native";

import Checkbox from "./CheckBox";

const Choice = ({
  callback,
  text,
  btnstyles,
  btnTxtStyles,
  btnstylesSelect,
  btnTxtStylesSelect,
  onValueChange,
  choicesCount,
  title,
  choiceText,
  choiceSelected,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const handleCheckboxChange = (id) => {
    setSelectedIndex(id);
    if (onValueChange) {
      onValueChange(text, id);
    }
  };
  const choicesHeaders = ["I'm home", "Leaving", "Sleeping", "Vacation"];

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={btnTxtStyles}></View>
      {Array.from({ length: choicesCount }).map((item, index) => (
        <Checkbox
          title={choicesHeaders[index]}
          id={index}
          btnstyles={btnstyles}
          btnstylesSelect={btnstylesSelect}
          selectedIndex={selectedIndex}
          onCheckboxChange={handleCheckboxChange}
          choiceText={choiceText}
          choiceSelected={choiceSelected}
        />
      ))}
    </View>
  );
};

export default Choice;
