import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView, XStack, View } from "tamagui";

import CartBottomSheetModal from "./components/CartBottomSheetModal";
import DescriptionCard from "./components/Description/DescriptionCard";

const width = Dimensions.get("window").width;
const height = 500;

const ProductDetailScreen = ({ route }) => {
  const { item_detail } = route.params;
  console.log("item_detail", item_detail);

  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / width);
    setCurrentPage(pageIndex);
  };

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Chi tiết sản phẩm",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );
  console.log("item_detail", item_detail);
  const cartRef = useRef(null);

  const addToCart = async () => {
    cartRef.current?.present();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ScrollView
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={[styles.wrap]}
          >
            {item_detail.images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {item_detail.images.map((e, index) => (
              <Text
                key={e}
                style={currentPage === index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {item_detail.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "red",
                marginTop: 8,
              }}
            >
              {Number(item_detail.price).toLocaleString("en-VN") + " đ"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <AntDesign name="star" size={24} color="black" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                {item_detail.totalRatings}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                flexWrap: "wrap",
                flex: 1,
              }}
            >
              {item_detail.varriants.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    borderRadius: 16,
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    alignItems: "center",
                  }}
                >
                  <Text>{item.color}</Text>
                  <Text>{item.price}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Đã Bán: {item_detail.sold}
            </Text>
          </View>
          {/*Content*/}
          <View style={[styles.styleBranch, { flex: 1 }]}>
            <Text style={styles.textBranch}>
              Thương hiệu : {item_detail.brand}
            </Text>
            <Text style={styles.textBranch}>Mặt hàng : {item_detail.slug}</Text>
            <View style={styles.viewDescription}>
              <Text style={styles.textBranch}>Thông tin sản phẩm</Text>
              <View flex={1}>
                <DescriptionCard description={item_detail.description} />
              </View>
            </View>
          </View>
          <Image
            source={{
              uri: item_detail.thumb,
            }}
            style={styles.viewImageProduct}
            resizeMode="contain"
          />
          <View style={styles.viewMore} />
          {/* <TouchableOpacity style={{ marginTop: 10 }}>
            <Text style={styles.textMore}>Xem thêm</Text>
          </TouchableOpacity> */}
          <View></View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnMess}>
          <AntDesign name="message1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDetai} onPress={addToCart}>
          <Text>Thêm giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnDetai, { backgroundColor: "black" }]}
          onPress={() =>
            navigation.navigate("Checkout", {
              cart: [
                {
                  color: item_detail.color,
                  price: item_detail.price,
                  product: {
                    _id: item_detail._id,
                    price: item_detail.price,
                    thumb: item_detail.thumb,
                    title: item_detail.title,
                  },
                  quantity: 1,
                  title: item_detail.title,
                },
              ],
            })
          }
        >
          <Text style={{ color: "white" }}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
      <CartBottomSheetModal ref={cartRef} product={item_detail} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "6%",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  btnMess: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
  },
  btnDetai: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  wrap: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 28,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: { margin: 3, color: "black" },
  dot: { margin: 3, color: "white" },

  styleBranch: {
    backgroundColor: "white",
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginVertical: 20,
  },

  textBranch: {
    fontSize: 17,
    fontFamily: "SemiBold",
  },

  viewDescription: {
    padding: 10,
  },

  textDescription: {
    fontSize: 17,
  },

  textDescriptionTitle: {
    flex: 4,
    fontSize: 17,
  },

  textDescriptionContent: {
    flex: 6,
    fontSize: 17,
  },

  viewDescriptionDetail: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },

  viewImageProduct: {
    alignSelf: "center",
    padding: "10",
    width: 300,
    height: 200,
  },

  viewMore: {
    borderBottomWidth: 1,
    borderColor: "gray",
    marginTop: 20,
  },

  textMore: {
    fontSize: 17,
    textAlign: "center",
  },
});
