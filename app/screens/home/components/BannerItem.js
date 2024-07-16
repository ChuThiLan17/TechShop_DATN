import { View } from "tamagui";

import { Image, StyleSheet } from "react-native";

import Animated, { FadeIn } from "react-native-reanimated";

const BannerItem = ({ img }) => {
  return (
    <Animated.View entering={FadeIn}>
      <View>
        <Image source={{ uri: img ?? "" }} style={styles.img} />
      </View>
    </Animated.View>
  );
};

export default BannerItem;

const styles = StyleSheet.create({
  img: {
    width: 317,
    height: 181,
    borderRadius: 6,
  },
});
