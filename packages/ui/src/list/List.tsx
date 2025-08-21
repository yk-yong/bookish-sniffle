import { FlatList, FlatListProps } from "react-native";

type Props<ItemT> = FlatListProps<ItemT>;
export default function List<ItemT = any>({ ...props }: Props<ItemT>) {
  return <FlatList {...props} />;
}

export type { Props as ListProps };
