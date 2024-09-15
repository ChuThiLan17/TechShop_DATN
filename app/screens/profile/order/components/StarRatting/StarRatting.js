import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";

import { View } from "tamagui";

import { Icon } from "../../../../components/Icon/Icon";

const StarRating = ({ totalStars, onRatingChange }) => {
  const [selectedStars, setSelectedStars] = React.useState(0);

  const handleStarPress = (index) => {
    const newRating = index + 1;
    setSelectedStars(newRating);
    onRatingChange(newRating);
  };

  return (
    <View style={styles.container} maxWidth={"100%"}>
      {Array.from({ length: totalStars }, (_, index) => (
        <View ai="center" gap={8} w={64} mx={4} key={index}>
          <View>
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
            >
              <Star filled={index < selectedStars} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const Star = ({ filled }) => {
  return <Icon icon={filled ? "starfull" : "starempty"} size={64} />;
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 24,
    color: "#ffd700", // Gold color
    marginHorizontal: 2,
  },
  reason: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: "#1a202c",
    borderWidth: 1,
  },
});
