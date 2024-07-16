import { useNavigation } from "@react-navigation/native";

import { View, XStack, YStack } from "tamagui";

import {
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";

import { ScrollView } from "react-native";

import api from "../../services";
import { Icon } from "../components/Icon/Icon";
import Itext from "../components/Text/Itext";

import ConfirmButton from "./component/component/ConfirmButton";
import GenderModal from "./component/component/GenderModal";
import InfomationInput from "./component/component/InfomationInput";

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
  const [address, setAddress] = useState([]);
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState();

  const fetch = async () => {
    try {
      const res = await api.user.getInfoUser();
      setName(res.data.rs.name);
      setAddress(res.data.rs.address);
      setMobile(res.data.rs.mobile);
      setGender(res.data.rs.gender);
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

  return (
    <View flex={1} bg={"#fff"}>
      <ScrollView>
        <View ai="center" flex={1}>
          <YStack mt={32} gap={8} ai="center">
            <View w={96} h={96} bg={"#ff6d03"} br={48}></View>
            <Itext
              text={"Change Profile Picture"}
              size={12}
              color={"#2971f0"}
            />
          </YStack>
          <YStack als="stretch" px={26} py={24} gap={20}>
            <InfomationInput
              text={"Họ và tên"}
              value={name}
              onChangeText={setName}
            />
            <InfomationInput text={"Địa chỉ"} value={"Hà Nội"} />
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
      />

      <GenderModal ref={genderRef} onSelectGender={setGender} />
    </View>
  );
}

export default ProfileInfomationScreen;
