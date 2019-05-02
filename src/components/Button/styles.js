import styled from "styled-components/native";

import colors from "../../values/colors";

export const Wrap = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.text};
  margin: 8px 16px;
  padding: 16px;
  border-radius: 6;
`;
export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 16;
`;
