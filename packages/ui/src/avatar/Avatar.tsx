import { StyleSheet } from "react-native";
import { Image, ImageProps } from "../image";

type Props = ImageProps & {
  height: number;
  width: number;
};
export default function Avatar({ height, width, style, ...rest }: Props) {
  return <Image style={[styles.avatar, { height, width }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 999,
    overflow: "hidden",
  },
});
