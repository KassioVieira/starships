import React from "react";

import { Wrap, Label, Field } from "./styles";

const FieldText = ({ label, ...rest }) => (
  <Wrap>
    <Label {...rest}>{label}</Label>
    <Field {...rest} />
  </Wrap>
);

export default FieldText;
