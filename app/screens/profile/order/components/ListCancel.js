import { FlashList } from "@shopify/flash-list";

import { useCallback, useEffect, useState } from "react";

import { View } from "tamagui";

import { RefreshControl } from "react-native";

import api from "../../../../services";

import HistoryOrderItem from "./HistoryOrderItem";
import ListEmptyView from "./ListEmptyView";
const ListCancel = () => {
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

  const filteredOrders = listConfirm.filter((order) => order.status === 3);

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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListCancel;
