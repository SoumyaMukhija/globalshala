import React from 'react';
import {Image, View} from 'react-native';
import {openInBrowser} from "../../utils/network_utils"
import {CardStyles} from "./CardStyles";
import { Card, CardItem, Body, Text, Badge } from 'native-base';

const ContestCard = (props) => {
  let imagePath = require('../../../assets/trophy.png');
  
    return (<Card style = {CardStyles.card}>
        <CardItem>
          <Body style={CardStyles.contest_body}>
            <View>
              <Image source={imagePath} style={CardStyles.contest_image}/>
            </View>
            <View>
            <Text style={CardStyles.card_heading}>{props.title}</Text>
            <Text style={CardStyles.card_content}>{props.description}</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem style={CardStyles.contest_btn_container} footer button onPress={() => openInBrowser(props.url)}>
          <Badge style={CardStyles.contest_card_tag}><Text>Contest</Text></Badge>
          <Text style={CardStyles.contest_card_btn}>Compete</Text>
        </CardItem>
      </Card>)
}

export default ContestCard;
