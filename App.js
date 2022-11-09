import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import backgroundVid from "./src/assets/video/bgVid.mp4";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Video style={styles.video} source={{ backgroundVid }} />

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
