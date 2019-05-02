import React, { Component } from "react";
import { View } from "react-native";
import { Formik } from "formik";

import Container from "../components/Container";
import Logo from "../components/Logo";
import WrapForm from "../components/WrapForm";
import FieldText from "../components/FieldText";
import Button from "../components/Button";
import Toolbar from "../components/Toolbar";

export default class Form extends Component {
  navigationToShips = value => {
    const { navigate } = this.props.navigation;
    navigate("Ships", {
      distance: value.mglt
    });
  };

  render() {
    return (
      <Container>
        <Toolbar title={`Challenge`} />
        <Logo />
        <WrapForm>
          <Formik
            initialValues={{
              mglt: 1000000
            }}
            onSubmit={values => {
              this.navigationToShips(values);
            }}
          >
            {props => (
              <View style={{ paddingVertical: 8 }}>
                <FieldText
                  label="Distância a ser percorrida? (em Mega Lights)"
                  keyboardType="numeric"
                  color="#343F4B"
                  onChangeText={props.handleChange("mglt")}
                  value={props.values.mglt.toString()}
                />

                <Button label="Ver resultado" onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </WrapForm>
      </Container>
    );
  }
}
