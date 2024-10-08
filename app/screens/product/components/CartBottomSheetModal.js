import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { Image, StyleSheet } from "react-native";

import { View, XStack, YStack } from "tamagui";

import Toast from "react-native-toast-message";

import api from "../../../services";
import Itext from "../../components/Text/Itext";

const CartBottomSheetModal = forwardRef(({ product }, ref) => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "50%"], []);

  const onPresent = useCallback(() => {
    sheetRef.current?.present();
  }, []);

  const onDismiss = useCallback(() => {
    sheetRef.current?.dismiss();
  }, []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      present: onPresent,
      dismiss: onDismiss,
    }),
    [onPresent, onDismiss]
  );

  // Render Backdrop
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        enableTouchThrough={false}
        pressBehavior={"close"}
      />
    ),
    []
  );

  const [color, setColor] = useState("Đỏ");
  const [type, setType] = useState();
  const [listColor, setListColor] = useState(product.color);

  const onPressAddCart = async () => {
    let params = {
      pid: product._id,
      pvid: type._id,
      color: type.color,
      price: type.price,
      thumb: type.thumb,
      title: type.title,
    };
    try {
      const res = await api.cart.putCart(params);
      if (res.data.success) {
        onDismiss();
        Toast.show({
          type: "success",
          text1: "Thêm vào giỏ hàng thành công",
        });
      }
    } catch (error) {
      if (error.response.data.success === false) {
        sheetRef.current.dismiss();
        Toast.show({
          type: "error",
          text1: error.response.data.mes,
        });
      }
      console.log(error);
    }
  };

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <BottomSheetScrollView
        style={[styles.contentContainer, { backgroundColor: "#fff" }]}
      >
        <YStack px={16} gap={8} flex={1}>
          <XStack ai="center" gap={12}>
            <Image
              source={{ uri: product.thumb }}
              style={{ width: 106, height: 106, borderRadius: 20 }}
            />
            <YStack>
              <Itext
                text={Number(product.price).toLocaleString("en-VN") + "đ"}
                color={"red"}
              />
              <Itext text={"Kho : " + product.quantity} />
            </YStack>
          </XStack>
          {product.varriants.length > 0 && (
            <YStack gap={12}>
              <Itext text={"Loại"} font={"semibold"} />
              <XStack gap={12} flexWrap="wrap">
                {product.varriants.map((item, index) => {
                  return (
                    <View
                      br={10}
                      bg={type === item ? "#000" : "#fff"}
                      borderColor={"#000"}
                      borderWidth={1}
                      w={100}
                      py={6}
                      onPress={() => setType(item)}
                      key={index}
                      alignItems="center"
                    >
                      <Itext
                        text={item.color}
                        color={type === item ? "#fff" : "#000"}
                      />
                      <Itext
                        text={item.price}
                        color={type === item ? "#fff" : "#000"}
                      />
                    </View>
                  );
                })}
              </XStack>
            </YStack>
          )}

          {/* <YStack gap={10}>
            <Itext text={"Màu sắc"} font={"semibold"} />
            <XStack gap={12} flexWrap="wrap">
              {listColor && listColor.length > 0 && (
                <>
                  {listColor.map((val, index) => (
                    <View
                      borderWidth={1}
                      borderColor={"#000"}
                      borderRadius={10}
                      py={8}
                      px={12}
                      bg={color === val ? "#000" : "#fff"}
                      key={index}
                      onPress={() => {
                        setColor(val);
                      }}
                    >
                      <Itext
                        text={val}
                        color={color === val ? "#fff" : "#000"}
                      />
                    </View>
                  ))}
                </>
              )} */}
          {/* <View
                borderWidth={1}
                borderColor={"#000"}
                borderRadius={10}
                py={8}
                px={12}
                onPress={() => {
                  setColor(product.color);
                }}
              >
                <Itext text={product.color} />
              </View> */}
          {/* </XStack> */}
          {/* </YStack> */}
        </YStack>
      </BottomSheetScrollView>
      <YStack
        bg={"#000"}
        py={12}
        ai="center"
        als="stretch"
        onPress={onPressAddCart}
      >
        <Itext text={"Thêm giỏ hàng"} color={"#fff"} />
      </YStack>
    </BottomSheetModal>
  );
});

export default CartBottomSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    flex: 1,
  },
});
