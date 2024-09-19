import { useIsFocused, useNavigation } from "@react-navigation/native";

import { FlashList } from "@shopify/flash-list";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { View, XStack, YStack } from "tamagui";

import { RefreshControl } from "react-native";

import api from "../../services";
import Itext from "../components/Text/Itext";
import formatDate from "../components/date/date";

function NotificationScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Thông báo",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetch();
    }
  }, [isFocused]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    if (refreshing) return;
    setRefreshing(true);
    try {
      fetch();
    } catch (error) {
      console.log(error);
    }
    setRefreshing(false);
  }, [refreshing]);

  const [notificatons, setNotification] = useState();

  const fetch = async () => {
    try {
      const res = await api.product.getNotification();
      if (res.data) {
        setNotification(res.data.notifications);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _renderItem = ({ item }) => {
    const date = formatDate(item.createdAt);
    return (
      <YStack
        onPress={() => {
          navigation.navigate("DetailNoti", {
            id: item._id,
          });
        }}
      >
        <XStack gap={16}>
          <YStack gap={8} flex={1}>
            <Itext text={item.title} size={18} font={"medium"} />
            <Itext text={item.message} />
          </YStack>

          <Itext text={date} />
        </XStack>
        <View h={1} bg={"#1a202c1a"} mt={12} />
      </YStack>
    );
  };

  return (
    <View f={1} bg={"#fff"}>
      <FlashList
        data={notificatons}
        renderItem={_renderItem}
        ListEmptyComponent={() => {
          return (
            <View h={500} jc="center" ai="center">
              <Itext text={"Bạn không có thông báo nào cả"} />
            </View>
          );
        }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View h={12} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        estimatedItemSize={90}
      />
    </View>
  );
}

export default NotificationScreen;
