import { View, XStack } from "tamagui";

import { TextInput } from "react-native";

import { useState } from "react";

import { Icon } from "../../../components/Icon/Icon";
import Itext from "../../../components/Text/Itext";

const InputChangePass = ({ text, onChangeText }) => {
  const [showPass, setShowPass] = useState(true);
  return (
    <View px={30} gap={12}>
      <Itext text={text}></Itext>
      <XStack bg="#6A6A6A1a" px={14} br={16} ai="center">
        <TextInput
          onChangeText={onChangeText}
          secureTextEntry={showPass}
          style={{ height: 48, flex: 1 }}
          cursorColor={"#000"}
        />
        <View onPress={() => setShowPass(!showPass)}>
          <Icon icon={showPass ? "hidepass" : "openpass"} />
        </View>
      </XStack>
    </View>
  );
};

export default InputChangePass;
