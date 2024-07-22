import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, XStack, YStack } from "tamagui";

import {
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";

import { ScrollView, Image } from "react-native";

import Toast from "react-native-toast-message";

import { launchImageLibrary } from "react-native-image-picker";

import api from "../../services";
import { KEY_STORAGE_USER } from "../../constants/KeyStorage";
import { Icon } from "../components/Icon/Icon";
import Itext from "../components/Text/Itext";

import ConfirmButton from "./component/component/ConfirmButton";
import GenderModal from "./component/component/GenderModal";
import InfomationInput from "./component/component/InfomationInput";

const DEFAULT_AVATAR_URL =
  "https://image-1.bituclub.com/images/f5235548-59ee-4585-b77b-ea88b6587867.png";

function ProfileInfomationScreen() {
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitle: "Account",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerLeft: () => (
          <Icon icon={"back"} onPress={() => navigation.goBack()} />
        ),
      });
    }, [navigation]),
    []
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState();
  const [avatar, setAvatar] = useState("");

  const fetch = async () => {
    try {
      const value = JSON.parse(
        await AsyncStorage.getItem(KEY_STORAGE_USER.USER_DATA)
      );
      setName(value.name);
      setMobile(value.mobile);
      setGender(value.gender);
      setAvatar(value.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const genderRef = useRef(null);

  const _onSelectedGender = () => {
    genderRef.current?.present();
  };

  const updateUser = async () => {
    let params = {
      name: name,
      mobile: mobile,
      gender: gender,
    };
    try {
      const res = await api.user.updateUser(params);
      if (res.data.success) {
        Toast.show({
          type: "success",
          text1: "Cập nhật thông tin thành công",
        });
        await AsyncStorage.setItem(
          KEY_STORAGE_USER.USER_DATA,
          res.data.updateUser
        );
      }
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.response.message,
      });
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: false,
    });

    if (result.didCancel) {
      console.log("User cancelled image picker");
    } else if (result.errorCode) {
      console.log("ImagePicker Error: ", result.errorCode);
    } else {
      const fileUri = result.assets[0].uri;
      setAvatar(fileUri);
      await api.user.uploadAvartar(result.assets[0]);
    }
  };

  return (
    <View flex={1} bg={"#fff"}>
      <ScrollView>
        <View ai="center" flex={1}>
          <YStack mt={32} gap={8} ai="center">
            {avatar.length > 1 ? (
              <Image
                source={{ uri: avatar ?? DEFAULT_AVATAR_URL }}
                style={{ width: 96, height: 96, borderRadius: 48 }}
              />
            ) : (
              <View
                w={96}
                h={96}
                bg={"#1a202c1a"}
                br={48}
                ai="center"
                jc="center"
              >
                <Icon icon={"camera"} color={"#2971f0"} />
              </View>
            )}
            <View onPress={pickImage}>
              <Itext
                text={"Change Profile Picture"}
                size={12}
                color={"#2971f0"}
              />
            </View>
          </YStack>
          <YStack als="stretch" px={26} py={24} gap={20}>
            <InfomationInput
              text={"Họ và tên"}
              value={name}
              onChangeText={setName}
            />
            <InfomationInput
              text={"Số điện thoại"}
              value={mobile}
              onChangeText={setMobile}
            />
            <YStack>
              <Itext text={"Giới tính"} />
              <XStack
                bg={"#F7F7F9"}
                px={16}
                py={14}
                br={14}
                ai="center"
                jc="space-between"
                onPress={_onSelectedGender}
              >
                <Itext
                  text={gender == 0 ? "Nam" : gender == 1 ? "Nữ" : "Khác"}
                ></Itext>
                <Icon icon={"arrowdown"} />
              </XStack>
            </YStack>
          </YStack>
        </View>
      </ScrollView>
      <ConfirmButton
        backgroundColor={"#000"}
        text={"Cập nhật"}
        color={"#fff"}
        onPress={updateUser}
      />

      <GenderModal ref={genderRef} onSelectGender={setGender} />
    </View>
  );
}

export default ProfileInfomationScreen;
