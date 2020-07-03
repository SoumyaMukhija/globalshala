import React, { useEffect, useState } from "react";
import { makeProgressRequest, openInBrowser } from "../utils/network_utils";
import { ActionSheet, Root, Fab, Icon, Button} from 'native-base';
import { Text, View } from "react-native";
import ScreenStyles, {TextStyle} from "./CommonStyles"
import Progress from "../components/Progress"
import Loading from "./LoadingPage"
import AppModal from "../components/Modal";

export default function ProgressPage() {

  const [data, setData] = useState(undefined)
  const [modalShown, setModalShown] = useState(true)
  const [currentSelectedUrl, setCurrentSelectedUrl] = useState(true)

  function openUrlInternally(url){
    if(url){
      console.log(url);
      setCurrentSelectedUrl(url)
      setModalShown(true)
    }
  }

  function closeModal(){
    setModalShown(false)
  }

  const showActionSheet = (item) => {
    console.log(item);
    
    let CONTENT = [{ text: " "},{ text: item["Description"] || "No Description"},{ text: " "},{ text: "More About this", icon: "book", iconColor: "#048FC1" }];
    ActionSheet.show(
                {
                  options: CONTENT,
                  title: item["Name"] || "No title"
                },
                buttonIndex => {
                  if(buttonIndex == 3){
                    
                    openUrlInternally(item['Related'][0])
                  }
                }
              )
  }

  async function getProgressSteps(){
    let json = await makeProgressRequest();
    setData(json["progress"])
  }

  useEffect(() => {
    getProgressSteps()
    setModalShown(false)
  }, []);

  

  if(data){
    return (
      <Root>
      <AppModal visible={modalShown} url={currentSelectedUrl} closeModal={closeModal}/>
      <View style = {ScreenStyles.screen}>
        <Text style={TextStyle.heading}>Map your journey</Text>
        <Text style={TextStyle.subtitle}>with Globalshala!</Text>
        <Progress data={data} showActionSheet={showActionSheet}/>
        {/* <Fab
            style={{ backgroundColor: '#048FC1', marginLeft:60}}
            position="bottomLeft"
            containerStyle={{left:'50%'}}
            onPress={() => {alert('Chat')}}>
            <Icon name="chatbubbles" />
          </Fab> */}
          
      </View>
      
      </Root>
    );
  }else{
    return <Loading message= "Getting your recipe to successs"/>
  }

}
