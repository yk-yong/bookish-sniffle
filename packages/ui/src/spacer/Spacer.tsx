import { View } from "../view";

type Props = {
  spacing?: number;
};
export default function Spacer({ spacing }: Props) {
  return <View style={{ margin: spacing || 0 }} />;
}
