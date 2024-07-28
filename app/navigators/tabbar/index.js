import { FontAwesome } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React, { useEffect, useRef, useState } from "react";

import { TouchableOpacity, View, StyleSheet } from "react-native";

import * as Animatable from "react-native-animatable";

import CartStackScreen from "./CartStack";
import HomeTab from "./HomeStack";
import ProfileTab from "./ProfileStack";

const Tab = createBottomTabNavigator();
function MainTabbar() {
  const RenderButton = (props) => {
    const viewRef = useRef(null);
    const focus = props.tab.accessibilityState?.selected;

    const animate1 = {
      0: { scale: 0.5, translateY: 2 },
      0.92: { translateY: -14 },
      1: { scale: 1, translateY: -10 },
    };
    const animate2 = {
      0: { scale: 1, translateY: 0 },
      1: { scale: 1, translateY: 7 },
    };
    useEffect(() => {
      if (focus) {
        viewRef?.current?.animate(animate1);
      } else {
        viewRef?.current?.animate(animate2);
      }
    }, [focus]);

    const renderIcon = () => {
      switch (props.label) {
        case "Home":
          return (
            <FontAwesome
              name="home"
              size={24}
              color={focus ? "white" : "gray"}
            />
          );
        case "Cart":
          return (
            <FontAwesome
              name="shopping-cart"
              size={24}
              color={focus ? "white" : "gray"}
            />
          );
        case "Profile":
          return (
            <FontAwesome
              name="home"
              size={24}
              color={focus ? "white" : "gray"}
            />
          );
      }
    };

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={props.tab.onPress}
        activeOpacity={1}
      >
        <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
          <View
            style={[
              styles.btn,
              focus && {
                backgroundColor: "blue",
                borderRadius: 60,
                padding: 5,
              },
            ]}
          >
            {renderIcon()}
          </View>
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarButton: (props) => <RenderButton tab={props} label={"Home"} />,
        }}
      />
      {/* <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarButton: (props) => <RenderButton tab={props} label={"Cart"} />,
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarButton: (props) => (
            <RenderButton tab={props} label={"Profile"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { MainTabbar };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  btn: {
    width: 45,
    height: 45,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});
