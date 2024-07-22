import { StyleSheet, Text, View } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    viewCart: {
        flexDirection: "row",
        width: "100%",
        height: "10%",
        borderWidth: 1,
        justifyContent: "space-between",
    },

    btnMess: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
    },
    btnDetai: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
    },

    textTitle: {
        fontSize: 15,
        fontFamily: "SemiBold",
        marginHorizontal: 10,
    }
})