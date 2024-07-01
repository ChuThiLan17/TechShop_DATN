import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/nav-bar";
import ItemAddress from "./Item-address";
import { useNavigation } from "@react-navigation/native";
import Itext from "../components/Text/Itext";

const data = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    address: {
      street: "123 Đường Nguyễn Văn A",
      city: "Hà Nội",
      country: "Việt Nam",
    },
    phone: "0987 654 321",
  },
  {
    id: "2",
    name: "Trần Thị B",
    address: {
      street: "456 Đường Trần Thị B",
      city: "Hồ Chí Minh",
      country: "Việt Nam",
    },
    phone: "0901 234 567",
  },
  {
    id: "3",
    name: "Phạm Văn C",
    address: {
      street: "789 Đường Phạm Văn C",
      city: "Đà Nẵng",
      country: "Việt Nam",
    },
    phone: "0978 123 456",
  },
  {
    id: "4",
    name: "Lê Thị D",
    address: {
      street: "321 Đường Lê Thị D",
      city: "Nha Trang",
      country: "Việt Nam",
    },
    phone: "0912 345 678",
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    address: {
      street: "555 Đường Hoàng Văn E",
      city: "Huế",
      country: "Việt Nam",
    },
    phone: "0965 432 109",
  },
];

const ListAddressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Navbar text="Danh sách địa chỉ" onPress={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 16, height: "90%" }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <ItemAddress dataAddress={item} />}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 18,
            height: 50,
            width: "80%",
          }}
          onPress={() => navigation.navigate("DetailProduct")}
        >
          <Itext
            text="Hello World!"
            size={20} // Kích thước font 20
            color="white" // Màu chữ là đen
            // backgroundColor="white" // Màu nền là trắng
            font="re" // Sử dụng font Outfit-Black
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ListAddressScreen;

const styles = StyleSheet.create({});
