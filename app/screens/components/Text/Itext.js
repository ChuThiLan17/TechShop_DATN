import { Text } from "react-native";

import { View } from "tamagui";

const Itext = ({ size, text, color, backgroundColor, font }) => {
  let fontFamily = "SemiBold"; // Giá trị mặc định là Outfit-Regular

  // Kiểm tra giá trị của font để áp dụng fontFamily phù hợp
  if (font === "lb") {
    fontFamily = "Black";
  } else if (font === "bo") {
    fontFamily = "Bold";
  } else if (font === "eb") {
    fontFamily = "ExtraBold";
  } else if (font === "el") {
    fontFamily = "ExtraLight";
  } else if (font === "li") {
    fontFamily = "Light";
  } else if (font === "me") {
    fontFamily = "Medium";
  } else if (font === "re") {
    fontFamily = "Regular";
  }

  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text
        style={{
          fontSize: size ? size : 16,
          color: color,
          fontFamily: fontFamily,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Itext;
