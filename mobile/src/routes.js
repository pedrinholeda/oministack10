import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Dev Radar"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Github Profile"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#8B8989" //Personalizar depois
        }
      }
    }
  )
);

export default Routes;
