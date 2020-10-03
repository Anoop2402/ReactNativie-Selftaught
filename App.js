import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreens from "./src/screens/ListScreen"
import FLScreens from "./src/screens/FlatListScreen"
import ImageScreens from "./src/screens/ImageScreen"
import ImageCardz from "./src/Components/ImageCards"
import CounterScreens from "./src/screens/CounterScreen"
import ColorScreens from "./src/screens/ColorScreen"
import ColorAdjusters from "./src/screens/ColorAdjuster"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    sample: ListScreens,
    FlatListExample:FLScreens,
    Gallery: ImageScreens,
    Cards: ImageCardz,
    Counter: CounterScreens,
    Color:ColorScreens,
    ColorAdjust:ColorAdjusters
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);



export default createAppContainer(navigator);
