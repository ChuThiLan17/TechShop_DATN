import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Navbar from "../components/nav-bar";
import { ScrollView } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddressScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [address, setAddress] = useState(param.dataAddress);
  console.log(param.dataAddress);
  console.log("address", address.dataAddress.address.city);

  return (
    <SafeAreaView>
      <Navbar text="Địa chỉ của bạn" onPress={() => navigation.goBack()} />
      <ScrollView style={{ paddingHorizontal: 16, height: "85%" }}>
        <View>
          <Text>Họ tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder={address ? address.dataAddress.address.city : "Họ tên "}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Số điện thoại</Text>
          <TextInput style={styles.textInput} placeholder="Số điện thoại " />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Tỉnh</Text>
          <TextInput style={styles.textInput} placeholder="Tỉnh " />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Huyện</Text>
          <TextInput style={styles.textInput} placeholder="Huyện " />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Xã</Text>
          <TextInput style={styles.textInput} placeholder="Xã " />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Chi tiết</Text>
          <TextInput style={styles.textInput} placeholder="Chi tiết địa chỉ" />
        </View>
      </ScrollView>
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
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Lưu Lại
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});
