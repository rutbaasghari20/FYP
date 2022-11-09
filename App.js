import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import backgroundVid from "./src/assets/video/bgVid.mp4";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Video
        style={{
          width: "100%",
          height: "100%",
        }}
        isLooping
        shouldPlay
        resizeMode="cover"
        source={backgroundVid}
      />

      <View
        style={{
          position: "absolute",
          bottom: 1,
          paddingHorizontal: 20,
          paddingBottom: 20,

          width: "100%",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  // backgroundVid: {
  //   height: height,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
});
