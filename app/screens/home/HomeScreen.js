import AsyncStorage from "@react-native-async-storage/async-storage";

import { TouchableOpacity, View, Text, FlatList, ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useReducer } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import CustomHeader from "../../common/CustomHeader";
import CustomSearch from "../../common/CustomSearch";
import { KEY_STORAGE_USER } from "../../constants/KeyStorage";

import SlideShow from "./SlideShow";
import { style } from "./styles";
import { getAllCategory } from "../../services/api/category/CategoryService"
import { getAllProducts } from "../../services/api/products/ProductsService"
import RenderListCategory from "./components/RenderListCategory"
import RenderListProduct from "./components/RenderListProduct"
function HomeScreen(props) {
  console.log(1);
  const rootState = useSelector((state) => state.loginReducer);
  //console.log("rootState", rootState);

  const initialState = {
    list_category: [],
    list_product: [],
  };

  const upDateState = (state = initialState, payload) => {
    return {
      ...state,
      ...payload
    }
  }

  const [state, dispatch] = useReducer(upDateState, initialState);
  console.log("state", state);
  useEffect(() => {
    //AsyncStorage.getItem(KEY_STORAGE_USER.USER_DATA).then((value) => console.log("user_data", value));
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await Promise.all([getAllCategory(), getAllProducts()]);
      dispatch({ list_category: res[0].data.createCategory, list_product: res[1].data.products })
      //console.log("res", res);
    } catch (error) {
      console.log("err", error);
    }
  }

  const RenderCategory = () => {
    return (
      <View style={style.viewCategory}>
        <View style={style.viewTitleCategory}>
          <Text style={style.textTitleCategory}>Thể loại</Text>
          <TouchableOpacity><Text>Tất cả</Text></TouchableOpacity>
        </View>
        <FlatList
          data={state.list_category}
          renderItem={(item) => <RenderListCategory item={item.item} />}
          keyExtractor={(item) => item._id}
          horizontal
          nestedScrollEnabled={true}
        />
      </View>
    )
  }

  const RenderProduct = () => {
    return (
      <View style={style.viewCategory}>
        <View style={style.viewTitleCategory}>
          <Text style={style.textTitleCategory}>Nổi bật</Text>
          <TouchableOpacity><Text>Tất cả</Text></TouchableOpacity>
        </View>
        <FlatList
          data={[...state.list_product, ...state.list_product]}
          renderItem={(item) => <RenderListProduct item={item.item} onPress={() => props.navigation.navigate("DetailProduct", { params: { item_detail: item.item } })} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          nestedScrollEnabled={true}
        />
      </View>
    )
  }

  const RenderCart = () => {
    return (
      <View style={style.viewCategory}>

      </View>
    )
  }


  return (
    <SafeAreaView style={style.container}>
      <CustomHeader
        title={"Trang chủ"}
      />
      <CustomSearch
        isTextInput={true}
        onPress={() => console.log("onPress")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SlideShow />
        <RenderCategory />
        <RenderProduct />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
