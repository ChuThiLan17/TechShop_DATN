import { useNavigation } from "@react-navigation/native";

import React from "react";

import { Modal, Pressable, StyleSheet } from "react-native";

import { View, XStack, YStack } from "tamagui";

import Itext from "../../../../components/Text/Itext";

const AddressModal = ({ isVisible }) => {
  const navigation = useNavigation();

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingHorizontal: 16,
        }}
      >
        <XStack
          style={{
            backgroundColor: "white",
            paddingHorizontal: 32,
            paddingVertical: 16,
            borderRadius: 10,
            width: "100%",
          }}
        >
          <YStack flex={1} gap={24}>
            <Itext
              text={
                "Không có địa chỉ nhận hàng, vui lòng thêm địa chỉ nhận hàng"
              }
            />

            <XStack>
              <View
                f={1}
                ai="center"
                py={10}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Itext text={"Thoát"} />
              </View>
              <View
                f={1}
                ai="center"
                bg="#000"
                br={16}
                py={10}
                onPress={() => {
                  navigation.navigate("ListAddress");
                }}
              >
                <Itext text={"Đồng ý"} color={"#fff"} />
              </View>
            </XStack>
          </YStack>
        </XStack>
      </Pressable>
    </Modal>
  );
};

export default AddressModal;
