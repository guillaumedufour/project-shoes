import {SafeAreaView, View, StyleSheet, StatusBar} from "react-native";
import {colors} from "../../constants/colors";
import SearchSection from "./searchSection";
import ListSection from "./listSection";
import NewsSection from "./newsSection";
import {useState} from "react";
import {brands} from "../../data/brand";


export default function HomeScreen() {
  const [inputValue, setInputValue] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("nike");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={{width: "100%", backgroundColor: "#000", height: 60}}></View>
      <SearchSection inputValue={inputValue} setInputValue={setInputValue} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand}/>
      <ListSection selectedBrand={selectedBrand}/>
      <NewsSection/>
      <View style={{width: "100%", backgroundColor: "#000", height: 106}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    justifyContent: "space-between"
  }
})