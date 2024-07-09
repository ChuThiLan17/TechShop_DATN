import { useNavigation } from "@react-navigation/native";

import { View, XStack } from "tamagui";

import { useLayoutEffect, useCallback } from "react";
import * as React from "react";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Dimensions, StyleSheet } from "react-native";

import { Icon } from "../../components/Icon/Icon";
import Itext from "../../components/Text/Itext";

const initialLayout = { width: Dimensions.get("window").width };

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const ThreeRoute = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const FourRoute = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  three: ThreeRoute,
  four: FourRoute,
});

function OrderScreen() {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Chờ xác nhận" },
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
        headerLeft: () => (
          <Icon icon={"back"} onPress={() => navigation.goBack()} />
        ),
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
