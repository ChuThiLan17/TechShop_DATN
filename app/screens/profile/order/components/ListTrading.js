import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { FlashList } from "@shopify/flash-list";

import { useCallback, useEffect, useState } from "react";

import { Text, View } from "tamagui";

import { Image, RefreshControl, StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import api from "../../../../services";

import HistoryOrderItem from "./HistoryOrderItem";
import ListEmptyView from "./ListEmptyView";
const ListTrading = () => {
  const [listConfirm, setListConfirm] = useState([]);
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

  const fetch = async () => {
    try {
      const res = await api.order.getOrder();
      setListConfirm(res.data.response);
    } catch (error) {}
  };

  const filteredOrders = listConfirm.filter((order) => order.status === 1);

  useEffect(() => {
    fetch();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <HistoryOrderItem item={item} />;
  }, []);

  return (
    <View flex={1}>
      <FlashList
        renderItem={renderItem}
        data={filteredOrders}
        ItemSeparatorComponent={() => <View h={16} />}
        estimatedItemSize={147}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => <ListEmptyView />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListTrading;
