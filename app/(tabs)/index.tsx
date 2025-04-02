import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const placeHolderImage = require("@/assets/images/background-image.png");

function onPress() {
  alert("Button pressed!")
}

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolderImage} />
      </View>
      <View>
        <Button onPress={onPress} label={"Choose a photo"} theme="primary"/>
        <Button onPress={onPress} label={"Use this photo"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
