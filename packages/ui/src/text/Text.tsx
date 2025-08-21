import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";

import { CustomTextProps } from "@newss/ui/components/text/type";

type Props = RNTextProps & CustomTextProps;
export default function Text({
  style,
  fontFamily = "regular",
  ...props
}: Props) {
  if (fontFamily === "bold") {
    return <RNText style={[styles.bold, style]} {...props} />;
  }

  if (fontFamily === "italic") {
    return <RNText style={[styles.italic, style]} {...props} />;
  }

  if (fontFamily === "semi-bold") {
    return <RNText style={[styles.semiBold, style]} {...props} />;
  }

  return <RNText style={[styles.regular, style]} {...props} />;
}

const styles = StyleSheet.create({
  regular: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    fontWeight: "regular",
  },
  bold: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    fontWeight: "700",
  },
  italic: {
    fontSize: 16,
    fontFamily: "Inter-Italic",
    fontWeight: "regular",
  },
  semiBold: {
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
});
export type { Props as TextProps };
