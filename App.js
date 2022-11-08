import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Video } from "expo-av";
const { height } = Dimensions.get("window");

export default function App() {
  return (
    <>
      <Video
        source={require("./frontend/assets/video/bgVid.mp4")}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});
