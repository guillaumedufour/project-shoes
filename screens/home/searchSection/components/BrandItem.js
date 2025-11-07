import {TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {colors} from "../../../../constants/colors";
import {spaces} from "../../../../constants/spaces";
import {radius} from "../../../../constants/radius";
import {ICON_SIZE} from "../../../../constants/size";
import TextBoldL from "../../../../ui-components/texts/TextBoldL";
import {brands} from "../../../../data/brand";

export default function BrandItem({item, selectedBrand, setSelectedBrand, index}) {
  const onPressBrand = () => {
    setSelectedBrand(item.name);
  }

  return (
    <TouchableOpacity onPress={onPressBrand} style={{
      marginLeft: index === 0 ? spaces.L : 0,
      marginRight: index === brands.length - 1 ? spaces.L : 0
    }}>
      {item.name === selectedBrand ?
        (<View style={styles.selectedBrandContainer}>
          <View>
            <Image source={item.logo} style={styles.image}/>
          </View>
          <TextBoldL style={styles.brandText}>{item.name.replace("-", " ")}</TextBoldL>
        </View>)
        : (
          <View style={[styles.iconContainer, styles.unselectedBrandContainer]}>
            <Image source={item.logo} style={styles.image}/>
          </View>
        )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedBrandContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.FULL,
    backgroundColor: colors.BLUE,
    padding: spaces.S
  },
  iconContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: radius.FULL,
    padding: spaces.S,
  },
  image: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: "contain",
  },
  brandText: {
    color: colors.WHITE,
    marginHorizontal: spaces.M,
    textTransform: "capitalize",
  },
  unselectedBrandContainer: {
    marginTop: spaces.S,
  }
});