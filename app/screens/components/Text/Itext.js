import { Text } from "react-native";

import { View } from "tamagui";

const Itext = ({ size, text, color, backgroundColor }) => {
  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text style={{ fontSize: size ? size : 16, color: color }}>{text}</Text>
    </View>
  );
};

export default Itext;
