import { View } from "tamagui";

import { Image, StyleSheet } from "react-native";

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={styles.logo}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
