import { useNavigation } from "@react-navigation/native";

import { FlatList, StyleSheet } from "react-native";

import { useEffect, useMemo, useReducer, useState } from "react";

import { useDebounce } from "use-debounce";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView } from "react-native-gesture-handler";

import { View } from "tamagui";

import api from "../../services";
import CustomHeader from "../../common/CustomHeader";
import CustomSearch from "../../common/CustomSearch";
import Itext from "../components/Text/Itext";

import SlideShow from "./SlideShow";
import { style } from "./styles";

import CategoryItem from "./components/CategoryItem";
import ItemProduct from "./components/item-product";

function HomeScreen(props) {
  const navigation = useNavigation();
  //const rootState = useSelector((state) => state.loginReducer);
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);
  const handleTextChange = (newText) => {
    setText(newText);
  };

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const getProduct = async () => {
    try {
      if (value.trim() !== "") {
        const params = {
          q: value,
        };
        const res = await api.product.getProduct(params);
        if (res.data.success) {
          setProduct(res.data.products);
        }
      } else {
        const res = await api.product.getProduct();
        if (res.data.success) {
          setProduct(res.data.products);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await api.product.getCategory();
      setCategory(res.data.res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, [value]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader title={"Trang chủ"} />
        <CustomSearch
          isTextInput={true}
          value={text}
          onChangeText={handleTextChange}
        />
        <SlideShow />
        <View style={styles.container}>
          <Itext font="semibold" size={20} text={"Loại máy"} />
          <View>
            <FlatList
              data={category}
              renderItem={({ item }) => {
                return (
                  <CategoryItem
                    item={item}
                    onPress={() => {
                      navigation.navigate("ListProduct", {
                        category: item.title,
                      });
                    }}
                  />
                );
              }}
              horizontal
            />
          </View>
        </View>
        <View>
          <Itext font="semibold" size={20} text={"Nổi Bật"} />
          <View style={styles.products}>
            <FlatList
              data={product}
              numColumns={2}
              renderItem={(item) => (
                <View>
                  <ItemProduct
                    item={item.item}
                    onPress={() =>
                      navigation.navigate("DetailProduct", {
                        item_detail: item.item,
                      })
                    }
                  />
                </View>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  category: {
    marginHorizontal: 24,
    paddingTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  products: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
