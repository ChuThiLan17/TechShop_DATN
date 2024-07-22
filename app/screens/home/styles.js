import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white"
    },

    viewCategory: {
        flex: 1,
        padding: 10,
    },

    viewTitleCategory: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 20,
    },

    textTitleCategory: {
        fontFamily: "SemiBold",
        fontSize: 25,
    },

    viewCart: {
        flexDirection: "row",
        width: "100%",
        height: "6%",
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
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
    },
})