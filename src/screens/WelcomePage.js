import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  View,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import SimpleDeck from "../components/SimpleDeck/SimpleDeck";
import { makeRequest } from "../utils/network_utils";

export default function WelcomePage() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    let json = makeRequest();
    setData(json);
  }, []);

  if (data) {
    const { height: screenHeight } = Dimensions.get("window");
    return (
      <Container style={{ backgroundColor: "#3F33BA" }}>
        <Content>
          <View
            style={{ height: screenHeight, flex: 1, justifyContent: "center" }}
          >
            <SimpleDeck />
          </View>
        </Content>
      </Container>
    );
  } else {
    return (
      <Container style={{ backgroundColor: "#3F33BA" }}>
        <Content>
          <Card style={cardContent.container}>
            <CardItem>
              <Body>
                <Text>Loading...</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const cardContent = StyleSheet.create({
  container: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    padding: 50,
  },
});
