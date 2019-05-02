import React, { Component } from "react";
import { StatusBar } from "react-native";
import Views from "./views";

import "./config/ReactotronConfig";
import colors from "./values/colors";

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor(colors.primary, true);
  }

  render() {
    return <Views />;
  }
}
