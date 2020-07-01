import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';
import ScreenStyles, {TextStyle} from "./CommonStyles"

const Loading = (props) => {
  return (
    <View style={ScreenStyles.screen_centered}>
      <Text style={TextStyle.heading_centered}>{props.message || "Umm..doing something important"}</Text>
      <Image source={{uri: 'https://media.giphy.com/media/3ohhwgrL4KKPIZoTQY/giphy.gif'}} style={{width: 300, height: 300, marginTop:50}} />
    </View>
  );
}

export default Loading
