import * as Notifications from "expo-notifications";

import { Alert, Linking } from "react-native";

export async function requestPermissions() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    Alert.alert(
      "Thông báo chưa được bật",
      "Bạn cần bật thông báo để nhận được các thông báo quan trọng.",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Permission denied"),
          style: "cancel",
        },
        {
          text: "Mở cài đặt",
          onPress: () => Linking.openSettings(), // Mở cài đặt ứng dụng
        },
      ]
    );
    return;
  } else {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    return;
  }
}
