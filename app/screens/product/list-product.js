import { useNavigation } from "@react-navigation/native";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { ScrollView } from "tamagui";

import api from "../../services";
import ItemProduct from "../home/components/item-product";

const ListProduct = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;

  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    const params = {
      category: category,
    };
    try {
      const res = await api.product.getProduct(params);
      if (res.data.success) {
        setProduct(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Danh sách sản phẩm",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation])
  );
  useEffect(() => {
    getProduct(category);
  }, [category]);
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <FlatList
        data={product}
        numColumns={2}
        renderItem={(item) => (
          <View>
            <ItemProduct
              item={item.item}
              onPress={() => navigation.navigate("ListProduct", { pid: item })}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
