import t from "tcomb-form-native";
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  surname: t.String,
  GRE: t.Number,
  TOEFL: t.Number,
  terms: t.Boolean,
});

const modifications = {
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

export default function Form() {
  handleSubmit = () => {
    const val = _form.getValue();
    //send data to flask backend
  };

  return (
    <View style={styles.container}>
      <Form
        ref={(form_data) => (_form = form_data)}
        type={User}
        options={modifications}
      />
      <Button title="Sign Up!" onPress={handleSubmit()} />
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
});
