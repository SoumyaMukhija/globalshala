import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Text, Footer, FooterTab, Button, Icon } from 'native-base';
import ScreenStyles from "./CommonStyles";
import ProgressPage from './ProgressPage';
import FormPage from './FormPage';
import FeedPage from './FeedPage';

const BarStyles = StyleSheet.create({
    bar:{
        backgroundColor:'#FFF', borderTopWidth: 0, 
    },
    item:{
        color: '#048FC1'
    },
    active:{
      opacity:1.0
    },
    inactive:{
      opacity:0.4
    }
})

const getContent = (idx) => {
    switch(idx){
        case 0: 
        return <FeedPage/>
        case 1: return <ProgressPage />
        case 2: return <FormPage />
    }
}

const HomePage = () => {
    const [selection, setSelection] = useState(0);
        return (
        <Container>
            {getContent(selection)}
        <Footer>
          <FooterTab style={BarStyles.bar}>
          <Button
           onPress = {() => {setSelection(0)}} 
           style={selection == 0 ? BarStyles.active : BarStyles.inactive}>
            <Icon name="paper" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Feed</Text>
            </Button>
            <Button onPress = {() => {setSelection(1)}}
            style={selection == 1 ? BarStyles.active : BarStyles.inactive}
            >
            <Icon name="navigate" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Journey</Text>
            </Button>
            <Button onPress = {() => {setSelection(2)}} 
            style={selection == 2 ? BarStyles.active : BarStyles.inactive}
            >
            <Icon name="bulb" style={BarStyles.item}/>
              <Text style={BarStyles.item}>Predict</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        );
    }

export default HomePage