import { useNavigation } from "@react-navigation/native";

import { Text, View, XStack } from "tamagui";

import { useLayoutEffect, useCallback, useEffect, useState } from "react";
import * as React from "react";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Dimensions, StyleSheet } from "react-native";

import api from "../../../services";
import { Icon } from "../../components/Icon/Icon";
import Itext from "../../components/Text/Itext";

import ListCancel from "./components/ListCancel";
import ListConfirmView from "./components/ListConfirmView";
import ListSuccess from "./components/ListSuccess";
import ListTrading from "./components/ListTrading";

const initialLayout = { width: Dimensions.get("window").width };

function OrderScreen() {
  const navigation = useNavigation();
  const [order, setOrder] = useState();
  const [index, setIndex] = useState(0);

  const FirstRoute = () => (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <ListConfirmView />
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <ListTrading />
    </View>
  );

  const ThreeRoute = () => (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <ListSuccess />
    </View>
  );

  const FourRoute = () => (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <ListCancel />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: ThreeRoute,
    four: FourRoute,
  });

  const [routes] = useState([
    { key: "first", title: " Xác nhận" },
    { key: "second", title: "Đang giao" },
    { key: "three", title: "Đã giao" },
    { key: "four", title: "Đã hủy" },
  ]);

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Đơn hàng",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      });
    }, [navigation]),
    []
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ initialLayout }}
      lazy
      renderTabBar={(props) => (
        <XStack ai={"center"} bg={"#fff"}>
          <TabBar
            {...props}
            activeColor={"#1a202c"}
            style={styles.tabbar}
            labelStyle={[styles.title]}
            renderLabel={(lb) => (
              <Itext size={13} text={lb.route.title}></Itext>
            )}
            indicatorStyle={{ backgroundColor: "#1a202c" }}
          />
        </XStack>
      )}
    />
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#fff",
    flex: 1,
    elevation: 0,
  },
});
