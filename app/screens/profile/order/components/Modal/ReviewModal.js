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

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      ref={sheetRef}
      enableDynamicSizing
      onChange={handleSheetChange}
    >
      <BottomSheetView style={{ backgroundColor: "#fff" }}>
        <YStack></YStack>
      </BottomSheetView>
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
