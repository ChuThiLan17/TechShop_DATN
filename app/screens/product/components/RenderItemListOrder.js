import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { styles } from './styles'
import Checkbox from 'expo-checkbox'
import { AntDesign } from "@expo/vector-icons";
const RenderItemListOrder = (props) => {

    const { item } = props;
    //console.log("item", item);

    return (
        <View style={styles.container}>
            <Image
                style={styles.viewImage}
                source={{ uri: "https://vienthammydiva.vn/wp-content/uploads/2022/07/gai-xinh-toc-ngang-vai-2k6-8.jpg" }}
            />
            <View style={styles.viewContent}>
                <View style={styles.viewContentTitle}>
                    <Text style={styles.textTitle}>{item.item.title}</Text>
                </View>
                <View style={styles.viewContentTitle}>
                    <View>
                        <Text>Loại 16gb</Text>
                        <Text style={styles.textPrice}>{Number(item.item.price * item.total).toLocaleString('en-VN')} đ</Text>
                    </View>
                    <View style={styles.viewOption}>
                        <TouchableOpacity style={styles.viewOptionTotal}>
                            <Text style={{ fontSize: 18 }}>x{item.total}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RenderItemListOrder

