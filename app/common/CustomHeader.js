import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomHeader = (props) => {
    const { iconLeft, iconRight, title } = props;
    return (
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                {iconLeft && <View style={styles.styleIconLeft}>{iconLeft}</View>}
                <Text style={styles.textTitle}>{title}</Text>
                {iconRight && <View style={styles.styleIconLeft}>{iconRight}</View>}
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },

    viewLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    styleIconLeft: {
        marginRight: 10,
    },

    textTitle: {
        fontFamily: "SemiBold",
        fontSize: 35,
    }
})