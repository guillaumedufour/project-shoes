import {FlatList} from "react-native";
import {brands} from "../../../../data/brand";
import BrandItem from "./BrandsItem";

export default function BrandsList() {
  return (
    <FlatList horizontal
              data={brands}
              keyExtractor={(item) => item.name}
              renderItem={({item}) => <BrandItem item={item}/>}
    />
  );
}