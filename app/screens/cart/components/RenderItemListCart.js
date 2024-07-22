import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { styles } from './styles'
import Checkbox from 'expo-checkbox'
import { AntDesign } from "@expo/vector-icons";
const RenderItemListCart = (props) => {

    const { item, onValueChangeCheckbox, onPlusItem, onSubtractItem, onRemoveItem } = props;
    //console.log("item", item);

    return (
        <View style={styles.container}>
            <Checkbox value={item.isSelect} onValueChange={(value) => onValueChangeCheckbox(value, item)} />
            <Image
                style={styles.viewImage}
                source={{ uri: "https://vienthammydiva.vn/wp-content/uploads/2022/07/gai-xinh-toc-ngang-vai-2k6-8.jpg" }}
            />
            <View style={styles.viewContent}>
                <View style={styles.viewContentTitle}>
                    <Text style={styles.textTitle}>{item.item.title}</Text>
                    <TouchableOpacity onPress={() => onRemoveItem(item)}>
                        <AntDesign name="delete" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewContentTitle}>
                    <View>
                        <Text>Loại 16gb</Text>
                        <Text style={styles.textPrice}>{Number(item.item.price * item.total).toLocaleString('en-VN')} đ</Text>
                    </View>
                    <View style={styles.viewOption}>
                        <TouchableOpacity
                            style={styles.viewOptionDetail}
                            onPress={() => { onSubtractItem(item) }}
                        >
                            <Text style={{ fontFamily: "SemiBold" }}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewOptionTotal}>
                            <Text>{item.total}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.viewOptionDetail}
                            onPress={() => { onPlusItem(item) }}
                        >
                            <Text style={{ fontFamily: "SemiBold" }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RenderItemListCart

