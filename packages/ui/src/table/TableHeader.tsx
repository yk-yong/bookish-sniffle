import { StyleSheet } from "react-native";
import { Text } from "../text";
import { View } from "../view";
import { TableHeaderProps } from "./type";

type Props<T> = TableHeaderProps<T>;
export default function TableHeader<T = unknown>({ columns, headerBackgroundColor, headerTextStyle }: Props<T>) {
  return (
    <View style={[styles.headerContainer, { backgroundColor: headerBackgroundColor }]}>
      {columns.map(column => (
        <View key={String(column.dataIndex)} style={{ width: column.width }}>
          {typeof column.title === "string" && (
            <Text key={String(column.dataIndex)} style={[headerTextStyle, { textAlign: column.align || "left" }]}>
              {column.title}
            </Text>
          )}
          {typeof column.title !== "string" && <View>{column.title}</View>}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
});
