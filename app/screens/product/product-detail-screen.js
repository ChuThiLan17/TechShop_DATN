import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "tamagui";
import Navbar from "../components/nav-bar";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const images = [
  "https://vienthammydiva.vn/wp-content/uploads/2022/07/gai-xinh-toc-ngang-vai-2k6-8.jpg",
  "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg",
  "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474014MTE/anh-gai-xinh-cute-de-thuong-hot-girl-5.jpg",
  "https://inkythuatso.com/uploads/thumbnails/800/2022/05/1-anh-gai-xinh-2k4-inkythuatso-07-15-20-27.jpg",
];

const data = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const [imgA, setImgA] = useState(0);
  const [text, setText] = useState("");

  onChange = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide != imgA) {
      setImgA(slide);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Navbar text="Chi tiết sản phẩm" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={[styles.wrap]}
          >
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgA === index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Lenovo B12</Text>
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
              100,000đ
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
                4.3
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
              Đã Bán: 400
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnMess}>
          <AntDesign name="message1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnDetai}
          onPress={() => navigation.navigate("Cart")}
        >
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
});
