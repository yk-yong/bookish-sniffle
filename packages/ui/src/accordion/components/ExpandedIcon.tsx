import { StyleSheet } from "react-native";
import { Image } from "../../image";

export default function ExpandedIcon() {
  return (
    <Image
      source={require("../images/expand-more/expand_more.png")}
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
