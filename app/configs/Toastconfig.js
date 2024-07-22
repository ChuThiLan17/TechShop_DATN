import React from "react";

import { View, Text, StyleSheet } from "react-native";

const toastConfig = {
  success: ({ text1, text2, props }) => (
    <View style={[styles.base, styles.success]}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
  error: ({ text1, text2, props }) => (
    <View style={[styles.base, styles.error]}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
  info: ({ text1, text2, props }) => (
    <View style={[styles.base, styles.info]}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
  noti: ({ text1, text2, props }) => (
    <View style={[styles.noti]}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
  info: {
    backgroundColor: "blue",
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 14,
    color: "white",
  },
  noti: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: "#000",
  },
});

export default toastConfig;
