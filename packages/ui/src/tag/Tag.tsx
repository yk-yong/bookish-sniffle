import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "../text";
import { View } from "../view";

type Props = {
  children: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
export default function Tag({ children, style, textStyle }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  text: {
    color: "#333",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});
