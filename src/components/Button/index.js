import React, { Component } from "react";
import { Wrap, Label } from "./styles";

export default class Button extends Component {
  render() {
    const { label, ...rest } = this.props;

    return (
      <Wrap activeOpacity={0.7} {...rest}>
        <Label>{label}</Label>
      </Wrap>
    );
  }
}
