import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../values/colors";
import { WrapButton, Label } from "./styles";

const ActionButton = ({ icon, label, ...rest }) => (
  <WrapButton {...rest}>
    {icon && <Icon name={icon} size={24} color={colors.text} />}
    <Label>{label}</Label>
  </WrapButton>
);

export default ActionButton;
