import { View } from "tamagui";
import { Dimensions, Text, Image } from "react-native";
import Itext from "../../components/Text/Itext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width;

const CategoryItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      width={width * 0.2}
      h={80}
      alignItems="center"
      padding={8}
      onPress={() => navigation.navigate("ListProduct")}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, borderRadius: 16 }}
      />
      <Text style={{ marginTop: 4 }}>{item.title}</Text>
    </TouchableOpacity>
  );
};
export default CategoryItem;
// luuthithaonhi@gmail.com
