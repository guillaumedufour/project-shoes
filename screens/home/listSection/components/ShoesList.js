import {FlatList, StyleSheet} from "react-native";
import {shoes} from "../../../../data/shoes";
import VerticalCard from "./VerticalCard";
import ItemSeparator from "../../../../ui-components/separators/ListItemSeparator";
import {spaces} from "../../../../constants/spaces";

export default function ShoesList({selectedBrand}) {
  const data = (shoes.find(elem => elem.brand === selectedBrand)?.stock || []).filter((item) => !item.new);
  return (
    <FlatList data={data}
              renderItem={({item}) => <VerticalCard item={item}/>}
              horizontal
              ItemSeparatorComponent={() => <ItemSeparator width={spaces.L}/>}
              contentContainerStyle={styles.listContainer}
              showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: spaces.L
  }
})