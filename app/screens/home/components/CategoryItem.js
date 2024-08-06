import { View } from "tamagui";

import { Dimensions, Text, Image } from "react-native";

const width = Dimensions.get("window").width;

const CategoryItem = ({ item, onPress }) => {
  return (
    <View
      width={width * 0.2}
      alignItems="center"
      padding={8}
      justifyContent="center"
      onPress={onPress}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, borderRadius: 16 }}
      />
      <Text style={{ marginTop: 8, textAlign: "center" }}>{item.title}</Text>
    </View>
  );
};
export default CategoryItem;
// luuthithaonhi@gmail.com
