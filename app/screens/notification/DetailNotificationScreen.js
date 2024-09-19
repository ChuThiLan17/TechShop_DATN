import { useNavigation, useRoute } from "@react-navigation/native";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { View, XStack, YStack } from "tamagui";

import { Image, ScrollView, StyleSheet } from "react-native";

import api from "../../services";
import Itext from "../components/Text/Itext";
import formatDate from "../components/date/date";

function DetailNotificationScreen() {
  const navigation = useNavigation();

  const id = useRoute().params?.id;

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Chi tiết thông báo",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const [noti, setNoti] = useState();

  const fetch = useCallback(async () => {
    if (!id) return;
    try {
      const res = await api.product.getNotificationById(id);
      if (res.data) {
        setNoti(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetch();
  }, []);

  const date = formatDate(noti?.createdAt ?? 0);

  return (
    <View f={1} bg={"#fff"}>
      <ScrollView>
        <YStack px={16} gap={8}>
          <Image source={{ uri: noti?.imageUrl ?? "" }} style={styles.img} />
          <XStack>
            <View f={1}>
              <Itext text={noti?.title} size={18} font={"medium"} />
            </View>
            <Itext text={date} />
          </XStack>
          <Itext text={noti?.message} />
        </YStack>
      </ScrollView>
    </View>
  );
}

export default DetailNotificationScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
});
