import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Roboto from "../../node_modules/native-base/Fonts/Roboto.ttf";
import Roboto_medium from "../../node_modules/native-base/Fonts/Roboto_medium.ttf";

export default function AppFontLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    }).then(() => setIsLoading(false));
  }, []);

  // const loadFont = async () => {
  //   await Font.loadAsync({
  //     Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
  //     ...Ionicons.font,
  //   });
  //   setIsLoading(false);
  // };
  console.log(isLoading);
  return isLoading;
}
