import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const WrapForm = ({ children, contentContainerStyle, ...rest }) => (
  <KeyboardAwareScrollView
    enableOnAndroid={true}
    contentContainerStyle={[
      { flexGrow: 1, marginRight: 16, marginLeft: 16 },
      contentContainerStyle
    ]}
    {...rest}
  >
    {children}
  </KeyboardAwareScrollView>
);

export default WrapForm;
