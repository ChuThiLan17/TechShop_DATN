import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
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
    gap: 12,
  },

  viewImage: {
    width: 84,
    height: 73,
    borderRadius: 16,
  },

  viewContent: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
  },

  viewContentTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
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

  viewOptionDetail: {
    width: 40,
    padding: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  viewOptionTotal: {
    width: 60,
    padding: 5,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
