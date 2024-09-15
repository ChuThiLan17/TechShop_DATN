import AsyncStorage from "@react-native-async-storage/async-storage";

import { XStack, YStack } from "tamagui";

import { TextInput } from "react-native";

import { useState } from "react";

import Toast from "react-native-toast-message";

import StarRating from "../StarRatting/StarRatting";
import api from "../../../../../services";
import { KEY_STORAGE_USER } from "../../../../../constants/KeyStorage";
import Itext from "../../../../components/Text/Itext";

const ItemRatting = ({ item, onPress }) => {
  const [ratting, setRatting] = useState(0);
  const [comment, setComment] = useState("");

  const onPressRatting = async () => {
    if (!ratting) return;
    console.log(item);
    if (!item.product) return;

    const user = JSON.parse(
      await AsyncStorage.getItem(KEY_STORAGE_USER.USER_DATA)
    );

    try {
      let params = {
        star: ratting,
        comment: comment ?? "",
        pid: item.product,
        avatar: user.avatar,
        name: user.name,
      };
      const res = await api.order.postRatting(params);

      if (res.data.status) {
        Toast.show({
          type: "success",
          text1: "Đánh giá sản phẩm thành công",
        });
        onPress();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <XStack>
      <YStack gap={12}>
        <Itext text={"Tên sản phẩm: " + item.title} />
        <Itext text={"Giá: " + item.price + " đ"} />
        <YStack mt={10} gap={8}>
          <Itext text={"Chọn số sao"} />
          <StarRating totalStars={5} onRatingChange={setRatting} />

          <TextInput
            placeholder="Hãy chia sẻ nhận xét về sản phẩm này nhé"
            style={{
              paddingVertical: 24,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderRadius: 16,
              borderColor: "#1a202c1a",
            }}
            onChangeText={setComment}
          />
        </YStack>

        <YStack
          bg={"#000"}
          py={10}
          br={16}
          ai={"center"}
          als="stretch"
          onPress={onPressRatting}
        >
          <Itext text={"Đánh giá"} color={"#fff"} />
        </YStack>
      </YStack>
    </XStack>
  );
};

export default ItemRatting;
