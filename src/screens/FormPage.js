import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ScreenStyles, { TextStyle } from "./CommonStyles";
import { makeRankingRequest, submitToPredict } from "../utils/network_utils";
import { Button, Item, Input, Label, CheckBox, Picker } from "native-base";
import Loading from "./LoadingPage";

const style = StyleSheet.create({
  label: {
    marginTop: 20,
  },
  input: {
    width: "100%",
  },
});

export default function FormPage() {
  const [universities, setUniversities] = useState([]);
  let [selectedUni, setSelectedUni] = useState("");

  async function getData() {
    let names = await makeRankingRequest();
    setUniversities(names);
  }

  useEffect(() => {
    getData();
  }, []);

  const getPicker = () => {
    if (universities) {
      return universities.map((university) => (
        <Picker.Item label={university} value={university} />
      ));
    }
  };

  //  if (data) {
  let [researched, setResearched] = useState(false);
  let [tnc, setTNC] = useState(true);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name Required!";
    } else if (values.name.length < 2) {
      errors.name = "The name field has to be of minimum length 2";
    }
    if (!values.gre) {
      errors.gre = "GRE Required!";
    } else if (values.gre < 260) {
      errors.gre = "GRE score cannot be lower than 260!";
    } else if (values.gre > 340) {
      errors.gre = "GRE score cannot be greater than 340!";
    }
    if (!values.toefl) {
      errors.toefl = "TOEFL Required!";
    } else if (values.toefl > 120) {
      errors.toefl = "TOEFL score cannot be greater than 120!";
    }
    if (!values.cgpa) {
      errors.cgpa = "CGPA Required";
    } else if (values.cgpa < 1) {
      errors.password = "CGPA should have minimum 1 character!";
    } else if (values.cgpa > 10) {
      errors.password = "CGPA cannot be greater than 10!";
    }
    if (tnc == false) {
      errors.tnc = "Terms and conditions need to be checked.";
    }
    return errors;
  };

  if (universities) {
    return (
      <View style={ScreenStyles.screen_basic}>
        <Text style={TextStyle.heading}>Chances</Text>
        <Text style={TextStyle.subtitle}>
          Would you get into your dream university?
        </Text>
        <Formik
          initialValues={{
            name: "",
            gre: 0,
            toefl: 0,
            cgpa: 0,
            institute: "",
            researched: false,
          }}
          onSubmit={async (values) => {
            let errors = validate(values);
            if (errors && Object.values(errors).length > 0) {
              let errorMsgs = Object.values(errors);
              alert(JSON.stringify(errorMsgs[0]));
              return;
            }
            let pred = await submitToPredict({
              ...values,
              institute: selectedUni,
              researched,
            });
            alert(pred);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
            isSubmitting,
          }) => {
            return (
              <ScrollView
                style={{ marginTop: 30, width: "100%" }}
                showsVerticalScrollIndicator={false}
              >
                <Item stackedLabel style={style.input}>
                  <Label style={style.label}>Name of the student</Label>
                  <Input
                    value={values.name}
                    onChangeText={handleChange("name")}
                  />
                </Item>
                <Item stackedLabel style={style.input}>
                  <Label style={style.label}>Obtained/Expected GRE score</Label>
                  <Input
                    value={values.gre}
                    onChangeText={handleChange("gre")}
                  />
                </Item>
                <Item stackedLabel style={style.input}>
                  <Label style={style.label}>
                    Obtained/Expected TOEFL score
                  </Label>
                  <Input
                    value={values.toefl}
                    onChangeText={handleChange("toefl")}
                  />
                </Item>
                <Item stackedLabel style={style.input}>
                  <Label style={style.label}>
                    Obtained/Expected CGPA on 10
                  </Label>
                  <Input
                    value={values.cgpa}
                    onChangeText={handleChange("cgpa")}
                  />
                </Item>

                <Item style={{ marginTop: 20 }}>
                  <Picker
                    mode="dropdown"
                    placeholder="Select university"
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10,
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    style={{ width: undefined }}
                    selectedValue={selectedUni}
                    onValueChange={(val) => {
                      setSelectedUni(val);
                    }}
                  >
                    {getPicker()}
                  </Picker>
                </Item>
                <Item
                  stackedLabel
                  style={
                    (style.input,
                    {
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "96%",
                      marginTop: 20,
                    })
                  }
                >
                  <Label style={style.label}>
                    Do you have any research published?
                  </Label>
                  <CheckBox
                    color="#048FC1"
                    checked={researched}
                    onPress={() => {
                      setResearched(!researched);
                      handleChange("researched");
                    }}
                  />
                </Item>
                <Item
                  stackedLabel
                  style={
                    (style.input,
                    {
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "96%",
                      marginTop: 20,
                    })
                  }
                >
                  <Label style={style.label}>
                    Agree to terms and conditions?
                  </Label>
                  <CheckBox
                    color="#048FC1"
                    checked={tnc}
                    onPress={() => {
                      setTNC(!tnc);
                    }}
                  />
                </Item>
                <Button
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: "#048FC1",
                    marginTop: 30,
                    borderRadius: 10,
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    PREDICT MY CHANCES
                  </Text>
                </Button>
              </ScrollView>
            );
          }}
        </Formik>
      </View>
    );
  } else {
    return <Loading message="Pulling university fliers." />;
  }
}
