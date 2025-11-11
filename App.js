import {useFonts} from "expo-font"
import HomeScreen from "./screens/home";
import {Dimensions} from "react-native";

export default function App() {
  const width = Dimensions.get("screen").width;
  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Montserrat-Light.ttf'),
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  return fontsLoaded ? <HomeScreen/> : null;
}