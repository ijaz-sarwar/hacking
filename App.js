import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import Screen from "./screens/Screen";
import WindowsSystemHack from "./screens/WindowsSystemHack";
import MobilePhoneHack from "./screens/MobilePhoneHack";
import HackAnEmailAccount from "./screens/HackAnEmailAccount";
import HackAWebsite from "./screens/HackAWebsite";
import HackAServer from "./screens/HackASever";
import HackACompany from "./screens/HackACompany";
import SplashScreen from "./components/SplashScreen";




const AppNavigator = createStackNavigator({
  SplshScreen: {
    screen: SplashScreen
  },
  Screen: {
    screen: Screen
  },

  WindowsSystemHack: {
    screen: WindowsSystemHack,

  },
  MobilePhoneHack: {
    screen: MobilePhoneHack,

  },
  HackAnEmailAccount: {
    screen: HackAnEmailAccount,

  },
  HackAWebsite: {
    screen: HackAWebsite,

  },
  HackAServer: {
    screen: HackAServer,
  },
  HackACompany: {
    screen: HackACompany,

  },



})

export default createAppContainer(AppNavigator);



