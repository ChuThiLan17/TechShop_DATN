import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import Carousel, { PaginationLight } from "react-native-x-carousel";
import React from 'react'
import { IMAGE_SLIDE } from '../../constants/FakeData';
const width = Dimensions.get("window").width;
const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
            <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        </View>
    </View>
);

const SlideShow = () => {
    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={IMAGE_SLIDE}
                loop
                autoplay
            />
        </View>
    )
}

export default SlideShow

const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },

    cardContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    cardWrapper: {
        borderRadius: 30,
        overflow: "hidden",
        marginHorizontal: 3,
    },
    card: {
        width: width * 0.94,
        height: width * 0.5,
    },
    cornerLabel: {
        position: "absolute",
        bottom: 35,
        left: 15,
    },
    cornerLabelText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "600",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
    },
})