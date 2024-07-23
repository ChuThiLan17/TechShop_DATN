import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 10,
  },

  viewImage: {
    width: 80,
    height: 80,
    borderRadius: 2,
  },

  viewContent: {
    flex: 1,
    justifyContent: "space-between",
  },

  viewContentTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textTitle: {
    fontSize: 20,
    fontFamily: "SemiBold",
  },

  textPrice: {
    fontSize: 18,
    fontFamily: "SemiBold",
    color: "green",
  },

  viewOption: {
    flexDirection: "row",
  },

  viewOptionTotal: {
    width: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
