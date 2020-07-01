import React, { useEffect, useState, useRef } from "react";
import WelcomePage from "./src/screens/WelcomePage";
import ProgressPage from "./src/screens/ProgressPage";
import * as Font from "expo-font";
import { Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
//import AppFontLoader from "./src/utils/AppFontLoader";

export default function App() {
  const _isMounted = useRef(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    })
      .then(() => setIsLoading(false))
      .then(() => (_isMounted.current = false));
  }, []);
  if (_isMounted.current) {
    if (isLoading) {
      return <AppLoading />;
    } else {
      return <ProgressPage />;
    }
  } else return <AppLoading />;
}
