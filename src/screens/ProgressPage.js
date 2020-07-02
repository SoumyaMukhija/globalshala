import React, { StyleSheet, useEffect, useState } from "react";
import { makeProgressRequest } from "../utils/network_utils";
import { Container, Content, ActionSheet, Root } from 'native-base';
import { Text, View } from "react-native";
import ScreenStyles, {TextStyle} from "./CommonStyles"
import Progress from "../components/Progress"
import Loading from "./LoadingPage"

export default function ProgressPage() {

  const [data, setData] = useState(undefined)

  const showActionSheet = (item) => {
    console.log(item);
    let CONTENT = [{ text: " "},{ text: item["Description"] || "No Description"},{ text: " "},{ text: "More About this", icon: "book", iconColor: "#048FC1" }];
    ActionSheet.show(
                {
                  options: CONTENT,
                  title: item["Name"] || "No title"
                },
                buttonIndex => {
                  
                }
              )
  }

  async function getProgressSteps(){
    let json = await makeProgressRequest();
    setData(json["progress"])
  }

  useEffect(() => {
    getProgressSteps()
  }, []);

  if(data){
    return (
      <Root>
      <View style = {ScreenStyles.screen}>
        <Text style={TextStyle.heading}>Map your journey</Text>
        <Text style={TextStyle.subtitle}>with Globalshala!</Text>
        <Progress data={data} showActionSheet={showActionSheet}/>
      </View>
      </Root>
    );
  }else{
    console.log(data);
    return <Loading message= "Getting your recipe to successs"/>
  }

}
