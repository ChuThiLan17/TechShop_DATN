import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const RenderListProduct = (props) => {
    const { item, onPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczg5LXBvbS0wMTE2LnBuZw.png" }} />
            <Text style={styles.textName}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default RenderListProduct

const styles = StyleSheet.create({
    container: {
        width: width / 2.4,
        height: height * 0.3,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 25,
        padding: 5,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },

    textName: {
        fontFamily: "SemiBold",
        fontSize: 15,
    },

    image: {
        width: 150,
        height: 80,
    }
})