import { createStackNavigator, createAppContainer } from "react-navigation";

import Form from "./Form";
import Ships from "./Ships";

const Navigator = createStackNavigator({
  Form,
  Ships},{
    headerMode: 'none'
});

export default createAppContainer(Navigator);
