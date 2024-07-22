import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomSearch = (props) => {

    const { value, isTextInput, onPress, onChangeText, } = props;

    return (
        <Pressable style={styles.container} onPress={() => { if (!isTextInput) onPress() }}>
            <AntDesign name={"search1"} size={20} />
            {
                isTextInput ?
                    <TextInput
                        style={styles.textTitle}
                        value={value}
                        placeholder='Bạn muốn mua gì ?'
                        onChangeText={onChangeText}
                    /> : <Text style={styles.textTitle}>Bạn muốn mua gì ?</Text>
            }
        </Pressable>
    )
}

export default CustomSearch

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
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
        marginVertical:20,
    },


    textTitle: {
        flex: 1,
        fontFamily: "Regular",
        fontSize: 15,
        marginLeft: 10,
    }


})