import { Image as RNImage, ImageProps as RNImageProps } from "react-native";

type Props = RNImageProps;
export default function Image({ ...props }: Props) {
  return <RNImage {...props} />;
}

export type { Props as ImageProps };
