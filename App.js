import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font"
import TextBoldS from "./ui-components/texts/TextBoldS";
import TextBoldXL from "./ui-components/texts/TextBoldXL";
import TextRegularS from "./ui-components/texts/TextRegularS";
import TextMediumM from "./ui-components/texts/TextMediumM";

export default function App() {
  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Montserrat-Light.ttf'),
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <TextBoldS>Open up App.js to start working on your app!</TextBoldS>
      <TextBoldXL>Open up App.js to start working on your app!</TextBoldXL>
      <TextMediumM>Open up App.js to start working on your app!</TextMediumM>
      <TextRegularS blue>Open up App.js to start working on your app!</TextRegularS>
     
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
