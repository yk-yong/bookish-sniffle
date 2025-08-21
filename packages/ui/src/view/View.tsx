import { View as RNView, ViewProps as RNViewProps } from "react-native";

type Props = RNViewProps;
export default function View(props: Props) {
  return <RNView {...props} />;
}

export type { Props as ViewProps };
