import React from 'react';
import {Image, View} from 'react-native';
import {CardStyles} from "./CardStyles";
import { Card, Badge, CardItem, Body, Text } from 'native-base';

const TwitterCard = (props) => {
  let imagePath = require('../../../assets/twitter.png');
    return (<Card style = {CardStyles.card}>
        <CardItem>
        <Body style={CardStyles.twitter_body}>
            <View style={{flex:4}}>
              <Text style={CardStyles.card_heading}>{props.title}</Text>
              <Text style={CardStyles.card_content}>{props.description}</Text>
            </View>
            <View style={{flex:1}}>
            <Image source={imagePath} style={CardStyles.twitter_image}/>
            </View>
          </Body>
        </CardItem>
        <CardItem style={CardStyles.contest_btn_container} footer button onPress={() => alert("This is Card Footer")}>
          <Badge style={CardStyles.twitter_card_tag}><Text>Twitter</Text></Badge>
          <Text style={CardStyles.twitter_card_btn}>Check it out</Text>
        </CardItem>
      </Card>)
}

export default TwitterCard;
