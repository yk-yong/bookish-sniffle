import { StyleSheet } from "react-native";
import { Image } from "../../image";

export default function CollapsedIcon() {
  return (
    <Image
      source={require("../images/expand-less/expand_less.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
