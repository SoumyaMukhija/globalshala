import React, { useState, useEffect } from "react";
import { makeProgressRequest } from "../utils/network_utils";
import { Text } from "react-native";

export default function WelcomePage() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let json = makeProgressRequest();
    setData(json);
  }, []);

  if (data) {
    <Text> {data} </Text>;
  } else return <Text> Loading... </Text>;
}
