import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import backgroundVid from "./src/assets/video/bgVid.mp4";
import { useRef } from "react";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Video
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
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
//STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
