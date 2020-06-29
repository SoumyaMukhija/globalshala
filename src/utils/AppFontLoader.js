import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function AppFontLoader() {
  let [isLoading, setIsLoading] = useState(true);

  // useEffect(function () {
  //   fontsLoaded = useFonts({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   });
  // });

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setIsLoading(false);
  };
  console.log("HERE!");
  return setIsLoading;
}
