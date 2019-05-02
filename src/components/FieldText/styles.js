import styled from "styled-components/native";

import colors from "../../values/colors";

export const Wrap = styled.View`
  flex-direction: column;
  margin: 8px 16px;
`;
export const Label = styled.Text`
  color: ${colors.text};
  font-size: 14;
  margin-bottom: 2;
`;
export const Field = styled.TextInput.attrs({
  placeholderTextColor: colors.text
})`
  border: 1px solid ${colors.window}
  border-radius: 8;
  color: ${colors.text};
  font-size: 16;
  padding: 8px 16px;
`;
