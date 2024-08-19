import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { View, XStack, YStack } from "tamagui";

import { useEffect } from "react";

import { useCheckoutContext } from "../provider/CheckoutProvider";
import { Icon } from "../../../components/Icon/Icon";
import Itext from "../../../components/Text/Itext";

const HeaderCheckoutView = () => {
  const navigation = useNavigation();
  const { address, listAddress, setAddress } = useCheckoutContext();

  return (
    <View>
      {address ? (
        <TouchableOpacity
          style={styles.viewAddress}
          onPress={() => {
            navigation.navigate("AddressCheckout", {
              address,
              setAddress,
            });
          }}
        >
          <XStack ai="center" gap={12}>
            <Icon icon={"address"} />
            <Text style={styles.textTitle}>Địa chỉ nhận hàng</Text>
          </XStack>

          <YStack px={30}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Text style={{ fontSize: 17, fontWeight: "medium" }}>
                {address?.name}
              </Text>
              <Text style={{ fontSize: 17, color: "#444444" }}>
                | {address?.phone}
              </Text>
            </View>
            <Text style={{ fontSize: 17, color: "#000000", marginTop: 4 }}>
              {address?.street} , {address?.ward} , {address?.district} ,{" "}
              {address?.city}
            </Text>
          </YStack>
        </TouchableOpacity>
      ) : (
        <View px={16} py={20}>
          <Itext text={"Địa chỉ giao hàng"} />
          <Itext text={"Chọn địa chỉ"}></Itext>
        </View>
      )}
    </View>
  );
};

export default HeaderCheckoutView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  viewAddress: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  textTitle: {
    fontSize: 18,
    fontFamily: "SemiBold",
    marginVertical: 15,
  },

  viewVoucher: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  viewCart: {
    flexDirection: "row",
    width: "100%",
    height: "7%",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRightWidth: 1,
  },
});
