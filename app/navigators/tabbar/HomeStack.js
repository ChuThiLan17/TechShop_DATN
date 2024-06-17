import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/home/HomeScreen";
import ProductDetailScreen from "../../screens/product/product-detail-screen";

const HomeStack = createNativeStackNavigator();

function HomeTab() {
  <HomeStack.Navigator initialRouteName="detai">
    <HomeStack.Screen name="Main" component={HomeScreen} />
    <HomeStack.Screen name="detai" component={ProductDetailScreen} />
  </HomeStack.Navigator>;
}

export { HomeTab };
