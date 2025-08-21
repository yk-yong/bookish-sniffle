import { TextInput as ReactNativeTextInput, TextInputProps } from "react-native";

type Props = TextInputProps;
export default function TextInput(props: Props) {
  return <ReactNativeTextInput {...props} />;
}
