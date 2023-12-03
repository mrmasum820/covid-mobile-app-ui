import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF4D58",
    borderRadius: 50,
    paddingHorizontal: 25,
  },

  btnText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    lineHeight: 18,
    marginLeft: 8,
  },
});

export default function Button({ icon, title, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Image source={icon} />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}
