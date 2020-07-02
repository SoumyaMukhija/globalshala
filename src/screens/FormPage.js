import t from "tcomb-form-native";
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const Form = t.form.Form;

export default function Form() {
  handleSubmit = () => {};

  var GRE_predicate = function (x) {
    return x >= 260 && x <= 340;
  };
  var TOEFL_predicate = function (x) {
    return x <= 120;
  };
  var CGPA_predicate = function (x) {
    return x <= 10;
  };

  var GRE_Range = t.refinement(t.Number, GRE_predicate);
  var TOEFL_Range = t.refinement(t.Number, TOEFL_predicate);
  var CGPA_Range = t.refinement(t.Number, CGPA_predicate);

  const User = t.struct({
    name: t.String,
    surname: t.String,
    GRE: GRE_Range,
    TOEFL: TOEFL_Range,
    CGPA: CGPA_Range,
    research: t.Boolean,
    terms: t.Boolean,
  });

  const modifications = {
    auto: "placeholders",
    fields: {
      name: {
        label: "First Name",
      },
      surname: {
        label: "Last Name",
      },
      terms: {
        label: "I agree to the terms and conditions of Globalshala",
      },
    },
  };

  return (
    <View style={styles.container}>
      <Form ref="form" type={User} options={modifications} />
      <TouchableHighlight
        style={styles.button}
        onPress={this.onPress}
        underlayColor="#99d9f4"
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
