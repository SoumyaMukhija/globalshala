import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
} from "native-base";
import { setStatusBarTranslucent } from "expo-status-bar";

const cardAsker = require("../../assets/asker.png");

const cards = [
  {
    text: "Welcome! Do you want to study abroad?",
    name: "One",
    image: cardAsker,
  },
  {
    text: "What can stop you from studying abroad?",
    name: "Two",
    image: cardAsker,
  },
];

class SimpleDeck extends Component {
  render() {
    return (
      <Container style={bground.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Welcome to Globalshala!</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            looping={false}
            renderEmpty={() => (
              <View>
                <Text>Over</Text>
              </View>
            )}
            renderItem={(item) => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={cardAsker} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={btns.container}>
                  <Button light style={styles.mb15}>
                    <Text>Yes</Text>
                  </Button>
                  <Button light style={styles.mb15}>
                    <Text>No</Text>
                  </Button>
                  <Button light style={styles.mb15}>
                    <Text>Maybe</Text>
                  </Button>
                </CardItem>
                <CardItem>
                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}

const bground = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

const btns = StyleSheet.create({
  container: {
    backgroundColor: "#EBEFF3",
  },
});

export default SimpleDeck;
