import { View } from "tamagui";

import Itext from "../../../components/Text/Itext";

const ConfirmButton = ({ text, backgroundColor, color, onPress }) => {
  return (
    <View
      bg={backgroundColor}
      als="stretch"
      br={14}
      onPress={onPress}
      ai="center"
      py={14}
      mx={26}
      mb={16}
    >
      <Itext text={text} color={color}></Itext>
    </View>
  );
};

export default ConfirmButton;
