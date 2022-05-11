import * as React from "react";
import { Switch } from "@rneui/base";
import { Icon } from "@rneui/themed";

export default () => {
  const [value, setValue] = React.useState(true);
  return (
    <Switch
      color="#8474A1"
      value={value}
      onValueChange={() => setValue(!value)}
    />
  );
};
