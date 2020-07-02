import React from 'react';
import {CardStyles} from "./CardStyles";
import { Card, CardItem, Badge, Body, Text } from 'native-base';

const InternshipCard = (props) => {
    return (<Card style = {CardStyles.card}>
        <CardItem>
          <Body>
          <Text style={CardStyles.card_heading}>{props.description}</Text>
            <Text>
               {props.text}
            </Text>
          </Body>
        </CardItem>
        <CardItem style={CardStyles.intern_btn_container} footer button onPress={() => alert("This is Card Footer")}>
          <Badge style={CardStyles.intern_card_tag}><Text>Intern</Text></Badge>
          <Badge style={CardStyles.intern_card_btn}><Text>Apply now</Text></Badge>
        </CardItem>
      </Card>)
}

export default InternshipCard;
