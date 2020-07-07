import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import { makeProgressRequest, openInBrowser } from "../utils/network_utils";
import { ActionSheet, Root, Fab, Icon, Button } from "native-base";
import { Text, View } from "react-native";
import ScreenStyles, { TextStyle } from "./CommonStyles";

export default function Splashscreen() {
    <Image  style={{  width:250, height: 250 }}
    source={require('../../assets/globalshala.png')}
    setTimeout(() => {
       this.props.navigation.navigate('HomePage')
    }, 3000);
 />
}