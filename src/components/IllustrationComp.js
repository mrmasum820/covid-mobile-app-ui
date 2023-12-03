import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  text: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default function IllustrationComp({ image, text }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
