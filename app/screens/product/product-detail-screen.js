import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { Editor } from "@tinymce/tinymce-react";

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useCallback, useLayoutEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView } from "tamagui";

import { useDispatch, useSelector } from "react-redux";

const width = Dimensions.get("window").width;
const height = 500;

const data = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
];

const ProductDetailScreen = (props) => {
  const { item_detail } = props.route.params.params;

  const navigation = useNavigation();
  const [imgA, setImgA] = useState(0);
  const [text, setText] = useState("");

  const rootState_cartProducts = useSelector(
    (state) => state.productReducer.cart_products
  );
  const dispatch = useDispatch();

  onChange = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide != imgA) {
      setImgA(slide);
    }
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

  const addToCart = () => {
    // const cart_temp = JSON.parse(JSON.stringify(rootState_cartProducts));
    // const index_item_select = cart_temp.findIndex(
    //   (value, index) => value.item._id === item_detail._id
    // );
    // console.log("cart_temp", cart_temp);
    // console.log("index_item_select", index_item_select);
    // if (index_item_select === -1) {
    //   cart_temp.push({ item: item_detail, total: 1, isSelect: true });
    // } else {
    //   cart_temp[index_item_select].total += 1;
    // }
    // dispatch(
    //   setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, {
    //     cart_products: cart_temp,
    //   })
    // );
    // props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <View>
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
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
                style={imgA === index ? styles.dotActive : styles.dot}
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
              }}
            >
              {data.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    borderRadius: 16,
                    borderWidth: 1,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text>{item.text}</Text>
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
          <View style={styles.styleBranch}>
            <Text style={styles.textBranch}>
              Thương hiệu : {item_detail.brand}
            </Text>
            <Text style={styles.textBranch}>Mặt hàng : {item_detail.slug}</Text>
            <View style={styles.viewDescription}>
              <Text style={styles.textBranch}>Thông tin sản phẩm</Text>
              <Text>{item_detail.description}</Text>
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
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={{ color: "white" }}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
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
