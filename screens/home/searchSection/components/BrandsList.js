import {FlatList, StyleSheet} from "react-native";
import {brands} from "../../../../data/brand";
import BrandItem from "./BrandItem";
import ItemHorizontalSeparator from "./ItemHorizontalSeparator";
import {useState} from "react";

export default function BrandsList() {
  const [selectedBrand, setSelectedBrand] = useState("nike");
  return (
    <FlatList horizontal
              data={brands}
              keyExtractor={(item) => item.name}
              renderItem={({item, index}) =>
                <BrandItem item={item}
                           selectedBrand={selectedBrand}
                           setSelectedBrand={setSelectedBrand}
                           index={index}
                />}
              style={styles.listContainer}
              contentContainerStyle={styles.contentStyle}
              ItemSeparatorComponent={ItemHorizontalSeparator}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 0,
  },
  contentStyle: {
    justifyContent: "space-between",
  }
})