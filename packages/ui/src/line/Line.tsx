import { StyleSheet } from "react-native";
import { View, ViewProps } from "../view";

type Props = {
  style?: ViewProps["style"];
};
export default function Line({ style }: Props) {
  return <View style={[styles.line, style]} />;
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3",
  },
});

export type { Props as LineProps };
