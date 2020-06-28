import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Grid,
  View,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import SimpleDeck from "./SimpleDeck.js/";

export default function WelcomePage() {
  async function makeRequest() {
    const response = await fetch("https://be13791ac9e7.ngrok.io");
    const json = await response.json();
    setData(json);
  }

  const [data, setData] = useState(undefined);

  useEffect(() => {
    makeRequest();
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
    const refreshPage = () => {
      window.location.reload(true);
    };
    return (
      <Container style={{ backgroundColor: "#3F33BA" }}>
        <Content>
          <Card style={cardContent.container}>
            <CardItem>
              <Body>
                <Text>Loading...</Text>
                {refreshPage()}
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
