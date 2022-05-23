import * as React from "react";
import { Switch } from "@rneui/base";

export default () => {
  const [value, setValue] = React.useState(true);
  return (
    <Switch
      color="#005555"
      value={value}
      onValueChange={() => setValue(!value)}
    />
  );
};
