import React, { useEffect, useState } from "react";
import WelcomePage from "./src/screens/WelcomePage/";
import * as Font from "expo-font";
import { Text } from "native-base";
import AppFontLoader from "./src/utils/AppFontLoader";

export default function App() {
  if ((<AppFontLoader />)) {
    return <Text>Loading!</Text>;
  } else {
    return <WelcomePage />;
  }
}
