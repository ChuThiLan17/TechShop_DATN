import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";

import { io } from "socket.io-client";

import Toast from "react-native-toast-message";

import * as Notifications from "expo-notifications";

import { requestPermissions } from "../common/PermissionCheck";
import { useAuthContext } from "../core/AuthProvider";
import { SOCKET_URL } from "../services/config";
import { ACCESS_TOKEN_KEY } from "../services/httpclient";
import EditAddressScreen from "../screens/address/EditAddressScreen";
import AddressScreen from "../screens/address/address-screen";
import ListAddressScreen from "../screens/address/list-address-screen";
import CartDetailScreens from "../screens/cart/cart-detail-screens";
import ForgotPasswordScreen from "../screens/forgotpassword/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/forgotpassword/ResetPasswordScreen";
import VerifiyTokenScreen from "../screens/forgotpassword/VerifyTokenScreen";
import DetailNotificationScreen from "../screens/notification/DetailNotificationScreen";
import NotificationScreen from "../screens/notification/NotificationScreen";
import CartScreen from "../screens/product/cart-screen";
import CheckoutScreen from "../screens/product/checkout-screen";
import ConfirmScreen from "../screens/product/confirmScreen";
import ListProduct from "../screens/product/list-product";
import ProductDetailScreen from "../screens/product/product-detail-screen";
import ProfileInfomationScreen from "../screens/profile/ProfileInfomationScreen";
import RattingScreen from "../screens/rating/RattingScreen";
import SigninScreen from "../screens/signin/SigninScreen";
import SignupScreen from "../screens/signup/SignupScreen";
import VerifyTokenEmail from "../screens/signup/VerifiyTokenEmail";
import ChangePassScreen from "../screens/profile/changepassword/ChangePassScreen";
import OrderScreen from "../screens/profile/order/OrderScreen";
import ListAddressCheckout from "../screens/product/components/checkout/ListAddressCheckout";

import { MainTabbar } from "./tabbar";

const Stack = createNativeStackNavigator();

const AppStack = function AppStack() {
  const navigation = useNavigation();
  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url; // Lấy URL từ data của thông báo
        if (url) {
          if (url.includes("notification")) {
            const notificationId = url.split("/").pop();
            navigation.navigate("DetailNoti", { id: notificationId });
          }
        }
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const socket = io(SOCKET_URL);

    const showNotification = async (data) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: data.title,
          body: data.message,
          sound: true, // Sử dụng âm thanh mặc định
          data: { url: `techshop://notification/${data?._id}` },
        },
        trigger: null, // Gửi ngay lập tức
      });
    };

    socket.on("notification", (data) => {
      showNotification(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabbar" component={MainTabbar} />

      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPass" component={ResetPasswordScreen} />
      <Stack.Screen name="Verify" component={VerifiyTokenScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="ListAddress" component={ListAddressScreen} />
      <Stack.Screen name="DetailProduct" component={ProductDetailScreen} />
      <Stack.Screen name="UpdateInfo" component={ProfileInfomationScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="ChangePass" component={ChangePassScreen} />
      <Stack.Screen name="CartDetailScreens" component={CartDetailScreens} />
      <Stack.Screen name="ListProduct" component={ListProduct} />
      <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
      <Stack.Screen name="EditAddressScreen" component={EditAddressScreen} />
      <Stack.Screen name="VerifyToken" component={VerifyTokenEmail} />
      <Stack.Screen name="AddressCheckout" component={ListAddressCheckout} />
      <Stack.Screen name="ListComment" component={RattingScreen} />
      <Stack.Screen name="DetailNoti" component={DetailNotificationScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
