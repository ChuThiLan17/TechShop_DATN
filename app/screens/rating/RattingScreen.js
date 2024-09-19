import { useNavigation, useRoute } from "@react-navigation/native";

import { FlashList } from "@shopify/flash-list";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { View, XStack, YStack } from "tamagui";

import { Image, RefreshControl, StyleSheet } from "react-native";

import api from "../../services";
import { Icon } from "../components/Icon/Icon";
import Itext from "../components/Text/Itext";

function RattingScreen() {
  const navigation = useNavigation();

  const params = useRoute().params;

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Đánh giá sản phẩm",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  const [ratting, setRatting] = useState();

  const fetch = async () => {
    try {
      const res = await api.product.getDetailById(params?.id);
      if (res.data) {
        setRatting(res?.data?.ratings ?? []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

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

  const _renderItem = ({ item }) => {
    return (
      <>
        <XStack gap={16} mb={4}>
          <Image source={{ uri: item.avatar ?? "" }} style={styles.img} />
          <YStack gap={8}>
            <YStack mx={6}>
              <Itext text={item.name} font={"medium"} size={18} />
            </YStack>
            <StarRatting star={item.star} />
            <Itext text={item.comment} />
          </YStack>
        </XStack>
        <View h={1} bg={"#1a202c1a"} />
      </>
    );
  };

  return (
    <View f={1} bg={"#fff"}>
      <FlashList
        data={ratting}
        renderItem={_renderItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          <View h={500} jc={"center"}>
            <Itext text={"Sản phẩm chưa có đánh giá nào cả"} color={"#000"} />
          </View>;
        }}
        estimatedItemSize={100}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

export default RattingScreen;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 24,
    color: "#ffd700", // Gold color
    marginHorizontal: 2,
  },
  reason: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: "#1a202c",
    borderWidth: 1,
  },
});

const StarRatting = ({ star }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }, (_, index) => (
        <View ai="center" gap={8} mx={2} key={index}>
          <Star filled={index < star} />
        </View>
      ))}
    </View>
  );
};

const Star = ({ filled }) => {
  return <Icon icon={filled ? "starfull" : "starempty"} size={24} />;
};
