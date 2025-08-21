import {
  ImageBackgroundProps as RNImageBackgroundProps,
  ImageBackground as RNImageBackground,
} from "react-native";

type Props = RNImageBackgroundProps;
export default function BackgroundImage(props: Props) {
  return <RNImageBackground {...props} />;
}

export type { Props as BackgroundImageProps };
