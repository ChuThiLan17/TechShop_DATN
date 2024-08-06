import { Text } from "react-native";

import { View } from "tamagui";

const Itext = ({ size, text, color, backgroundColor, font, textAlign }) => {
  let fontFamily = "Regular"; // Giá trị mặc định là Outfit-Regular

  // Kiểm tra giá trị của font để áp dụng fontFamily phù hợp
  if (font === "lb") {
    fontFamily = "Black";
  } else if (font === "bold") {
    fontFamily = "Bold";
  } else if (font === "exbold") {
    fontFamily = "ExtraBold";
  } else if (font === "exli") {
    fontFamily = "ExtraLight";
  } else if (font === "li") {
    fontFamily = "Light";
  } else if (font === "medium") {
    fontFamily = "Medium";
  } else if (font === "regular") {
    fontFamily = "Regular";
  } else if (font === "semibold") {
    fontFamily = "SemiBold";
  }

  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Text
        style={{
          fontSize: size ? size : 16,
          color: color,
          fontFamily: fontFamily,
          textAlign: textAlign,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Itext;
