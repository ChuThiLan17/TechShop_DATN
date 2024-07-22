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
} from "react";

import { Image, StyleSheet } from "react-native";

import { View, YStack } from "tamagui";

import Itext from "../../../components/Text/Itext";

const GenderModal = forwardRef(({ onSelectGender }, ref) => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "30%"], []);

  const onPresent = useCallback(() => {
    console.log("Presenting BottomSheet");
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

  const _onSelectedGender = (index) => {
    onSelectGender(index);
    onDismiss();
  };

  const _onRenderItems = useCallback(() => {
    return [0, 1, 2].map((item, index) => (
      <YStack pr={16} key={index}>
        {index === 0 && (
          <View onPress={() => _onSelectedGender(item)}>
            <View p={16}>
              <Itext text={"Nam"} />
            </View>
            <View h={1} bg={"#1a202c"}></View>
          </View>
        )}
        {index === 1 && (
          <View onPress={() => _onSelectedGender(item)}>
            <View p={16}>
              <Itext text={"Nữ"} />
            </View>

            <View h={1} bg={"#1a202c"}></View>
          </View>
        )}
        {index === 2 && (
          <View onPress={() => _onSelectedGender(item)}>
            <View p={16}>
              <Itext text={"Khác"} />
            </View>
            <View h={1} bg={"#1a202c"}></View>
          </View>
        )}
      </YStack>
    ));
  }, []);

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
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <BottomSheetScrollView
        style={[styles.contentContainer, { backgroundColor: "#fff" }]}
      >
        <YStack>{_onRenderItems()}</YStack>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default GenderModal;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    flex: 1,
    paddingVertical: 21,
    paddingLeft: 16,
  },
});
