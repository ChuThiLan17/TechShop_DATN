import { StackActions } from "@react-navigation/native";

import { navigationRef } from "app/navigators/navigationUtilities";

const MainNavigation = {
  push(screen, params) {
    navigationRef.dispatch(StackActions.push(screen, params));
  },
  replace(screen, params) {
    navigationRef.dispatch(StackActions.replace(screen, params));
  },
  pop(count) {
    navigationRef.dispatch(StackActions.pop(count));
  },
  async popToRoot() {
    await navigationRef.dispatch(StackActions.popToTop());
  },
  reset(screen, params) {
    navigationRef.reset({
      routes:
        screen !== undefined
          ? [{ name: screen, params }]
          : [{ name: "Tabbar" }],
    });
  },
  current() {
    return navigationRef.getCurrentRoute();
  },
  count() {
    return navigationRef.getRootState().routes.length;
  },
  target() {
    return navigationRef.current?.getParent() ?? navigationRef;
  },
  isMounted(screen) {
    return (
      navigationRef.getState().routes.findIndex((val) => val.name === screen) >
      -1
    );
  },
  ref: navigationRef,
};

export { MainNavigation };
