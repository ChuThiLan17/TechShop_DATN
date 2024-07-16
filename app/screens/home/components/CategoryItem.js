import { View } from "tamagui";

import { Dimensions, Text, Image } from "react-native";

import Itext from "../../components/Text/Itext";

const width = Dimensions.get("window").width;

const CategoryItem = ({ item }) => {
  return (
    <View width={width * 0.2} h={330}>
      <Image
        source={{ uri: item.image }}
        style={{ width: "90%", height: 200 }}
      />
      <Text>{item.title}</Text>
    </View>
  );
};
export default CategoryItem;
