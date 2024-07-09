import { View, XStack } from "tamagui";

import { TextInput } from "react-native";

import Itext from "../../components/Text/Itext";

const InputSignup = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View>
      <Itext text={label} color={"#818181"}></Itext>
      <XStack>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={{ height: 48, flex: 1 }}
          secureTextEntry={secureTextEntry}
        />
      </XStack>
      <View h={1} als="stretch" bg={"#1a202c1a"} />
    </View>
  );
};

export default InputSignup;
