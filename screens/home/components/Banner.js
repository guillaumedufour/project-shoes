import {View, StyleSheet, TouchableOpacity} from "react-native";
import {spaces} from "../../../constants/spaces";
import TextBoldL from "../../../ui-components/texts/TextBoldL";
import TextMediumL from "../../../ui-components/texts/TextMediumM";

export default function Banner({text}) {
  const onPress = () => {
  }
  return (
    <View style={styles.container}>
      <TextBoldL>{text}</TextBoldL>
      <TouchableOpacity>
        <TextMediumL blue>Voir tout</TextMediumL>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spaces.L,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spaces.M
  }
})