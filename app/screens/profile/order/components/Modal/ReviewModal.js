import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { StyleSheet } from "react-native";

import { YStack } from "tamagui";

import Itext from "../../../../components/Text/Itext";

import ItemRatting from "./ItemRatting";

const ReviewModal = forwardRef(({}, ref) => {
  const sheetRef = useRef(null);

  const [products, setProducts] = useState([]);

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
      onShow: (product) => {
        setProducts(product);
        onPresent();
      },
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

  const renderItem = (item) => {
    return (
      <ItemRatting
        key={item.id}
        item={item}
        onPress={() => {
          sheetRef.current.dismiss();
        }}
      />
    );
  };

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      ref={sheetRef}
      enableDynamicSizing
      onChange={handleSheetChange}
    >
      <BottomSheetScrollView style={{ backgroundColor: "#fff" }}>
        <YStack p={16} gap={24}>
          <Itext text={"Vui lòng đánh giá chất lượng sản phẩm"} />
          {products && products.length > 0 && (
            <>{products.map((item) => renderItem(item))}</>
          )}
        </YStack>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default ReviewModal;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    flex: 1,
    paddingVertical: 21,
    paddingLeft: 16,
  },
});
