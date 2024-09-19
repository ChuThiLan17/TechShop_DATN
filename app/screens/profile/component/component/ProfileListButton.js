import Ionicons from "@expo/vector-icons/Ionicons";

import { View, XStack } from "tamagui";

import { Icon } from "../../../components/Icon/Icon";
import Itext from "../../../components/Text/Itext";

const ProfileListButton = ({ icon, text, size, onPress, color }) => {
  return (
    <XStack gap={22} onPress={onPress}>
      <View ai="center" w={24} h={24}>
        <Icon icon={icon} color={color} />
      </View>
      <Itext text={text} />
    </XStack>
  );
};

export default ProfileListButton;
