import {TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {colors} from "../../../../constants/colors";
import {spaces} from "../../../../constants/spaces";
import {radius} from "../../../../constants/radius";
import {ICON_SIZE} from "../../../../constants/size";

export default function BrandItem({item}) {
  console.log(item);
  return (
    <TouchableOpacity>
      <View>
        <Image source={item.logo} style={styles.image}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: radius.FULL,
    padding: spaces.S,
  },
  image: {
    width: {ICON_SIZE},
    height: {ICON_SIZE},
    resizeMode: "contain",
  }
});