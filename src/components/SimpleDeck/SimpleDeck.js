import React from "react";
import { StyleSheet, View } from "react-native";
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
import { cards } from "./data";

export default function SimpleDeck() {
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
                  <Thumbnail source={item.cardImage} />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  mb15: {
    marginBottom: 20,
  },
});
