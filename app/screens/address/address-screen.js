import { useNavigation, useRoute } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useCallback, useLayoutEffect, useState } from "react";

import { ScrollView } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";

import Toast from "react-native-toast-message";

import api from "../../services";

const AddressScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [address, setAddress] = useState([]);

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Địa chỉ của bạn",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDicstrict] = useState("");
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [phone, setPhone] = useState("");

  const postAddress = async () => {
    let address = {
      name: name,
      street: street,
      district: district,
      city: city,
      ward: ward,
      phone: phone,
    };
    try {
      const res = await api.user.updateAddress(address);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Thêm địa chỉ thành công",
        });
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
        <View>
          <Text>Họ tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Họ tên"}
            onChangeText={setName}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Số điện thoại "
            onChangeText={setPhone}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Tỉnh</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tỉnh "
            onChangeText={setCity}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Huyện</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Huyện "
            onChangeText={setDicstrict}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Xã</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Xã "
            onChangeText={setWard}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Đường</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Đường "
            onChangeText={setStreet}
          />
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
            marginBottom: 8,
          }}
          onPress={postAddress}
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
