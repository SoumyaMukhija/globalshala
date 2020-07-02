import React from 'react';
import {CardStyles} from "./CardStyles";
import { Card, CardItem, Body, Text, Badge } from 'native-base';

const BlogCard = (props) => {
console.log("PROPPPS", props);

    return (<Card style = {CardStyles.card}>
        <CardItem>
          <Body>
            <Text style={CardStyles.card_heading}>{props.title}</Text>
            <Text style={CardStyles.card_content}>{props.description}</Text>
          </Body>
        </CardItem>
        <CardItem style={CardStyles.blog_btn_container} footer button onPress={() => alert("This is Card Footer")}>
          <Badge style={CardStyles.blog_card_tag}><Text>Blog</Text></Badge>
          <Text style={CardStyles.blog_card_btn}>Read complete blog</Text>
        </CardItem>
      </Card>)
}

export default BlogCard;
