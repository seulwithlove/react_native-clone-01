import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native"
import React from "react"
import { Link } from "expo-router"

import pingu from "@/assets/images/pingu.jpeg"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={pingu} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Hello Strangers!</Text>

        {/* link 추가할때 href로 할수 있음 */}
        <Link
          style={[styles.link, { marginHorizontal: "auto" }]}
          href="/pop"
          asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>POP!</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

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
    marginBottom: 120,
  },
  link: {
    color: "pink",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  button: {
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
})
