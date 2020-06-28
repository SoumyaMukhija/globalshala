import React, { useEffect, useState } from "react";
import {View} from 'native-base';
import WelcomePage from "./src/components/WelcomePage/";
import * as Font from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function App() {

  // let [isLoading, setIsLoading] = useState(true);

  let fontsLoaded = false;

  useEffect(function(){
    fontsLoaded = useFonts({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  })

  // const loadFont = async () => {
    
  

  //     // await Font.loadAsync({
  //     //   'Roboto': require('native-base/Fonts/Roboto.ttf'),
  //     //   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //     //   ...Ionicons.font,
  //     // });
  //     // setIsLoading(false)
  //   }
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <WelcomePage />
  }

 
}
