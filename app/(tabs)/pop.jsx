import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import wizardPingu from "@/assets/images/wizard-pingu.jpeg";

const secondPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={wizardPingu}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Wing gardium Leviousa!</Text>
      </ImageBackground>
    </View>
  );
};

export default secondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "pink",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
