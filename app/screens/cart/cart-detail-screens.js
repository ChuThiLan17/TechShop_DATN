import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { styles } from './styles';
import CheckBox from 'expo-checkbox';
import RenderItemListCart from './components/RenderItemListCart';
import { setCartProductAction } from '../../redux/action/productAction';
import { KEY_ACTION_SET } from '../../constants/KeyRedux';

const CartDetailScreens = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const rootState_cartProducts = useSelector((state) => state.productReducer.cart_products);
    console.log("rootState_cartProducts", rootState_cartProducts);
    const dispatch = useDispatch();

    const total_price = useCallback(() => {
        let total = 0;
        for (let i = 0; i < rootState_cartProducts.length; i++) {
            if (rootState_cartProducts[i].isSelect) {
                total += rootState_cartProducts[i].item.price * rootState_cartProducts[i].total;
            }
        }

        return total;
    }, [rootState_cartProducts]);

    useEffect(() => {
        console.log("ok check");
        let isSelect = true;
        for (let i = 0; i < rootState_cartProducts.length; i++) {
            if (!rootState_cartProducts[i].isSelect) {
                isSelect = rootState_cartProducts[i].isSelect
            }
        }
        setToggleCheckBox(isSelect);
    }, [rootState_cartProducts]);

    const handleToggleCheckBox = (newValue) => {
        const cart_temp = rootState_cartProducts.map((value, index, arr) => {
            return { item: value.item, total: value.total, isSelect: newValue }
        });

        dispatch(setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, { cart_products: cart_temp }));
        setToggleCheckBox(newValue);
    }

    const handleValueChangeCheckbox = (value_checked, item_checked) => {
        const cart_temp = rootState_cartProducts.map((value_map, index_map, arr_map) => {
            if (item_checked.item._id === value_map.item._id) {
                return { item: value_map.item, total: value_map.total, isSelect: value_checked }
            }

            return { item: value_map.item, total: value_map.total, isSelect: value_map.isSelect }
        });

        dispatch(setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, { cart_products: [...cart_temp] }));
    }


    const handleSubtractItem = (item_checked) => {
        if (item_checked.total === 1) {
            return handleRemoveItem(item_checked);
        }

        const cart_temp = rootState_cartProducts.map((value_map, index_map, arr_map) => {
            if (item_checked.item._id === value_map.item._id) {
                return { item: value_map.item, total: value_map.total - 1, isSelect: value_map.isSelect }
            }
            return { item: value_map.item, total: value_map.total, isSelect: value_map.isSelect }
        });
        dispatch(setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, { cart_products: [...cart_temp] }));
    }

    const handlePlusItem = (item_checked) => {
        const cart_temp = rootState_cartProducts.map((value_map, index_map, arr_map) => {
            if (item_checked.item._id === value_map.item._id) {
                return { item: value_map.item, total: value_map.total + 1, isSelect: value_map.isSelect }
            }
            return { item: value_map.item, total: value_map.total, isSelect: value_map.isSelect }
        });
        dispatch(setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, { cart_products: [...cart_temp] }));
    }

    const handleRemoveItem = (item_checked) => {
        const cart_temp = rootState_cartProducts.filter((value_map, index_map, arr_map) => {
            return value_map.item._id !== item_checked.item._id;
        });

        dispatch(setCartProductAction(KEY_ACTION_SET.SET_CART_PRODUCT, { cart_products: [...cart_temp] }));
        if (!cart_temp.length) {
            props.navigation.goBack();
        }
    }


    props.navigation.setOptions({
        headerShown: true,
        headerTitle: "Giỏ hàng",
        headerTitleAlign: "center",
        headerShadowVisible: false,
    });



    return (
        <View style={styles.container}>
            <View style={[styles.container, { padding: 5 }]}>
                <FlatList
                    data={rootState_cartProducts}
                    renderItem={((item) =>
                        <RenderItemListCart
                            item={item.item}
                            onValueChangeCheckbox={handleValueChangeCheckbox}
                            onSubtractItem={handleSubtractItem}
                            onPlusItem={handlePlusItem}
                            onRemoveItem={handleRemoveItem}
                        />)}
                    keyExtractor={((item) => item.item._id)}
                />
            </View>
            <View style={styles.viewCart}>
                <View
                    style={[styles.btnDetai, { flex: 2 }]}
                >
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={handleToggleCheckBox}
                    />
                    <Text style={styles.textTitle}>Tất cả</Text>
                </View>
                <View
                    style={[styles.btnDetai, { flex: 5 }]}
                >
                    <Text style={styles.textTitle}>Tổng thanh toán</Text>
                    <Text style={[styles.textTitle, { color: "green" }]}>{Number(total_price()).toLocaleString("en-VN")} đ</Text>
                </View>
                <TouchableOpacity
                    style={[styles.btnDetai, { flex: 3, backgroundColor: "black" }]}
                    onPress={() => props.navigation.navigate("Checkout")}
                >
                    <Text style={{ color: "white" }}>Mua hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartDetailScreens

