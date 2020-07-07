import React, { useEffect, useState, useRef } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "./src/screens/HomePage";
import Loading from "./src/screens/LoadingPage";

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
      return <Loading />;
    } else {
      return <HomePage />;
    }
  } else return <Loading />;
}
