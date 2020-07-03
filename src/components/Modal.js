import React from 'react';
import {
    Alert,
    Modal, View, Text, StyleSheet
  } from "react-native";
import { WebView } from 'react-native-webview';
import { Button } from 'native-base';

const styles = StyleSheet.create({
  btn: {
    width:'100%',
    height:'7%',
    backgroundColor:'#048FC1',
    justifyContent:'center',
    alignItems: 'center'
  }
})

const AppModal = (props) =>{
  console.log(props.url);
  
    return (<Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
      <WebView
        source={{uri: props.url}}
        style={{ marginTop: 20 }}
      />  
      <Button style={styles.btn} onPress = {() => {props.closeModal()}}>
        <Text style={{color: '#FFF'}}>Close</Text>
      </Button>
      </Modal>)
}

export default AppModal