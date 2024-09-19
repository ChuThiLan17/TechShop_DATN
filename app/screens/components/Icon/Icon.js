import * as React from "react";

import { Image, TouchableOpacity, View } from "react-native";

export function Icon({
  icon,
  color,
  size,
  style,
  containerStyle: $containerStyleOverride,
  resizeMode,
  ...WrapperProps
}) {
  const isPressable = !!WrapperProps.onPress;
  const Wrapper = isPressable ? TouchableOpacity : View;

  const $imageStyle = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    style,
  ];

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        resizeMode={resizeMode}
        style={$imageStyle}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  );
}

const $imageStyleBase = {
  resizeMode: "contain",
};

export const iconRegistry = {
  back: require("../../../../assets/icons/Back.png"),

  // Profile House_03
  bag: require("../../../../assets/icons/Bag.png"),
  person: require("../../../../assets/icons/person.png"),
  ship: require("../../../../assets/icons/ship.png"),
  noti: require("../../../../assets/icons/notification.png"),
  setting: require("../../../../assets/icons/setting.png"),
  logout: require("../../../../assets/icons/logout.png"),
  hidepass: require("../../../../assets/icons/hide-password.png"),
  openpass: require("../../../../assets/icons/preview-password.png"),
  arrowdown: require("../../../../assets/icons/arrowdown.png"),
  camera: require("../../../../assets/icons/camera 1.png"),
  confirm: require("../../../../assets/icons/Featured icon.png"),
  address: require("../../../../assets/icons/address.png"),

  icon_address: require("../../../../assets/icons/House_03.png"),

  starfull: require("../../../../assets/icons/ic_star_full.png"),
  starempty: require("../../../../assets/icons/star 5.png"),
};
