import { useNavigation, useRoute } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useCallback, useLayoutEffect, useState } from "react";

import { ScrollView, XStack } from "tamagui";

import { SafeAreaView } from "react-native-safe-area-context";

import Toast from "react-native-toast-message";

import api from "../../services";

const EditAddressScreen = () => {
  const navigation = useNavigation();
  const param = useRoute().params;

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
  const [name, setName] = useState(param.dataAddress.name);
  const [street, setStreet] = useState(param.dataAddress.street);
  const [district, setDicstrict] = useState(param.dataAddress.district);
  const [city, setCity] = useState(param.dataAddress.city);
  const [ward, setWard] = useState(param.dataAddress.ward);
  const [phone, setPhone] = useState(param.dataAddress.phone);

  const putAddress = async () => {
    let params = {
      addressId: param.dataAddress._id,
      newAddress: {
        name: name,
        street: street,
        district: district,
        city: city,
        ward: ward,
        phone: phone,
      },
    };
    try {
      const res = await api.user.putAddress(params);
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

  const deleteAddress = async () => {
    try {
      const res = await api.user.deleteAddress(param.dataAddress._id);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Xóa địa chỉ thành công",
        });
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
        <View>
          <Text>Họ tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Họ tên"}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Số điện thoại "
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Tỉnh</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tỉnh "
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Huyện</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Huyện "
            value={district}
            onChangeText={setDicstrict}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Xã</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Xã "
            value={ward}
            onChangeText={setWard}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text>Đường</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Đường "
            value={street}
            onChangeText={setStreet}
          />
        </View>
      </ScrollView>
      <XStack style={{ alignItems: "center" }} mx={16} gap={16}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 18,
            height: 50,
            marginBottom: 8,
            flex: 1,
          }}
          onPress={deleteAddress}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
            }}
          >
            Xóa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 18,
            height: 50,
            marginBottom: 8,
            flex: 1,
          }}
          onPress={putAddress}
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
      </XStack>
    </SafeAreaView>
  );
};

export default EditAddressScreen;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});
