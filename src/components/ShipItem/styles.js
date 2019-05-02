import styled from "styled-components/native";

import colors from "../../values/colors";

export const WrapCard = styled.TouchableOpacity`
	elevation: 1;
	shadow-color: ${colors.tertiary};
	shadow-radius: 1;
	border-radius: 3.17;
	border: 2px solid ${colors.highlight};
	margin: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 16;
`;

export const Stop = styled.Text`
  font-size: 20;
  color: ${colors.danger};
  margin-right: 10;
  margin-left: 16;
  text-align: center;
  font-weight: bold;
`;

export const Ship = styled.Text`
	color: ${colors.text}
	font-weight: bold;
	font-size: 22;
	margin: 10px;
`;

export const Model = styled.Text`
  font-size: 15;
  color: ${colors.text};
  margin: 10px;
`;
