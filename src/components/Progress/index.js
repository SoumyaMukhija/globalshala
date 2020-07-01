import React, {useState, useEffect} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {progressStyle} from "./progressStyle.js";
import {ActionSheet} from "native-base";

const Progress = (props) => {

  const [currentStep, setCurrentStep] = useState(0)
  const [labels, setLabels] = useState([])


  useEffect(() => {
    const mappedLabels = props.data.map((step) => {
      return step['Name']
    })
    setLabels(mappedLabels)
  }, [])

  const onPageChange = (position) => {
    console.log(position);
    setCurrentStep(position)
    props.showActionSheet(props.data[position])
  }

  return (
    <StepIndicator
    direction="vertical"
    customStyles={progressStyle}
    currentPosition={currentStep}
    labels={labels}
    stepCount={labels.length || 0}
    onPress = {(position) => {onPageChange(position)}}
    />
  );
}

export default Progress;
