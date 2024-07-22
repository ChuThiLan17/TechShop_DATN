import { AntDesign } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ScrollView,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useMemo, useReducer } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import CustomHeader from "../../common/CustomHeader";
import CustomSearch from "../../common/CustomSearch";
import { KEY_STORAGE_USER } from "../../constants/KeyStorage";
import { getAllCategory } from "../../services/api/category/CategoryService";
import { getAllProducts } from "../../services/api/products/ProductsService";

import SlideShow from "./SlideShow";
import { style } from "./styles";

import RenderListCategory from "./components/RenderListCategory";
import RenderListProduct from "./components/RenderListProduct";
function HomeScreen(props) {
  //const rootState = useSelector((state) => state.loginReducer);
  const rootState_cartProducts = useSelector(
    (state) => state.productReducer.cart_products
  );
  console.log("rootState_cartProducts", rootState_cartProducts);

  const initialState = {
    list_category: [],
    list_product: [],
  };

  const upDateState = (state = initialState, payload) => {
    return {
      ...state,
      ...payload,
    };
  };

  const [state, dispatch] = useReducer(upDateState, initialState);
  console.log("state", state);
  useEffect(() => {
    //AsyncStorage.getItem(KEY_STORAGE_USER.USER_DATA).then((value) => console.log("user_data", value));
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await Promise.all([getAllCategory(), getAllProducts()]);
      dispatch({
        list_category: res[0].data.createCategory,
        list_product: res[1].data.products,
      });
      //console.log("res", res);
    } catch (error) {
      console.log("err", error);
    }
  };

  const RenderCategory = useMemo(() => {
    return (
      <View style={style.viewCategory}>
        <View style={style.viewTitleCategory}>
          <Text style={style.textTitleCategory}>Thể loại</Text>
          <TouchableOpacity>
            <Text>Tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={state.list_category}
          renderItem={(item) => <RenderListCategory item={item.item} />}
          keyExtractor={(item) => item._id}
          horizontal
          nestedScrollEnabled={true}
        />
      </View>
    );
  }, [state.list_category]);

  const RenderProduct = useMemo(() => {
    return (
      <View style={style.viewCategory}>
        <View style={style.viewTitleCategory}>
          <Text style={style.textTitleCategory}>Nổi bật</Text>
          <TouchableOpacity>
            <Text>Tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={[...state.list_product]}
          renderItem={(item) => (
            <RenderListProduct
              item={item.item}
              onPress={() =>
                props.navigation.navigate("DetailProduct", {
                  params: { item_detail: item.item },
                })
              }
            />
          )}
          keyExtractor={(item) => item._id}
          numColumns={2}
          nestedScrollEnabled={true}
        />
      </View>
    );
  }, [state.list_product]);

  const RenderCart = useMemo(() => {
    const total_price = () => {
      let total = 0;
      for (let i = 0; i < rootState_cartProducts.length; i++) {
        if (rootState_cartProducts[i].isSelect) {
          total +=
            rootState_cartProducts[i].item.price *
            rootState_cartProducts[i].total;
        }
      }

      return total;
    };

    return (
      rootState_cartProducts.length > 0 && (
        <View style={style.viewCart}>
          <TouchableOpacity
            style={style.btnMess}
            onPress={() => {
              props.navigation.navigate("CartDetailScreens");
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
          <View style={style.btnDetai}>
            <Text>Tổng thanh toán</Text>
            <Text>{Number(total_price()).toLocaleString("en-VN")} đ</Text>
          </View>
          <TouchableOpacity
            style={[style.btnDetai, { backgroundColor: "black" }]}
            onPress={() => props.navigation.navigate("Checkout")}
          >
            <Text style={{ color: "white" }}>Mua hàng</Text>
          </TouchableOpacity>
        </View>
      )
    );
  }, [rootState_cartProducts]);

  return (
    <SafeAreaView style={style.container}>
      <CustomHeader title={"Trang chủ"} />
      <CustomSearch isTextInput={true} onPress={() => console.log("onPress")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SlideShow />
        {RenderCategory}
        {RenderProduct}
      </ScrollView>
      {RenderCart}
    </SafeAreaView>
  );
}

export default HomeScreen;
