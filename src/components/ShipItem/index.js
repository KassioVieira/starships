import React, { Component } from "react";
import Icon from "react-native-vector-icons/Octicons";
import { WrapCard, Ship, Model, Row, Column, Stop } from "./styles";
import colors from "../../values/colors";

export default class ShipItem extends Component {
  calcStopsToShip(MGLT, consumables, distance) {
    let arr = consumables.split(" ");
    let amountDays = this.calcDays(arr[0], arr[1]);

    let result = distance / (amountDays * (24 * MGLT));

    return parseInt(result) > 0 ? parseInt(result) : "Do not Stop";
  }

  calcDays = (value, time) => {
    if (time === "years" || time === "year") {
      return value * 365;
    } else if (time === "months" || time === "month") {
      return value * 30;
    } else if (time === "weekends" || time === "week") {
      return value * 7;
    } else {
      return value;
    }
  };

  render() {
    const {
      name,
      model,
      mglt,
      MGLT,
      consumables,
      distance,
      ...rest
    } = this.props;
    return (
      <WrapCard activeOpacity={0.6} {...rest}>
        <Ship>{name}</Ship>
        <Row>
          <Icon name="stop" size={30} color={colors.danger} />
          <Stop>{this.calcStopsToShip(MGLT, consumables, distance)}</Stop>
        </Row>
        <Model>{model}</Model>
      </WrapCard>
    );
  }
}
