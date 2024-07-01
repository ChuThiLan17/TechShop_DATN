import { View } from "tamagui";

import { TextInput } from "react-native";

import Itext from "../../../components/Text/Itext";

const InfomationInput = ({
  text,
  placeholder,
  value,
  onChangeText,
  editable,
}) => {
  return (
    <View gap={16}>
      <Itext text={text} />
      <View bg={"#F7F7F9"} px={16} py={14} br={14}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={{ fontSize: 14 }}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default InfomationInput;
