import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Text, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import ScreenStyles from "./CommonStyles";
import ProgressPage from './ProgressPage';
import FeedPage from './FeedPage';

const BarStyles = StyleSheet.create({
    bar:{
        backgroundColor:'#FFF', borderTopWidth: 0, 
    },
    item:{
        color: '#048FC1'
    }
})

const getContent = (idx) => {
    switch(idx){
        case 0: return <FeedPage/>
        case 1: return <ProgressPage />
        case 2: return <View style={ScreenStyles.screen}/>
    }
}

const HomePage = () => {
    const [selection, setSelection] = useState(0);
        return (
        <Container>
            {getContent(selection)}
        <Footer>
          <FooterTab style={BarStyles.bar}>
          <Button onPress = {() => {setSelection(0)}}>
            <Icon name="paper" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Feed</Text>
            </Button>
            <Button onPress = {() => {setSelection(1)}}>
            <Icon name="navigate" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Journey</Text>
            </Button>
            <Button onPress = {() => {setSelection(2)}}>
            <Icon name="bulb" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Predict</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        );
    }

export default HomePage