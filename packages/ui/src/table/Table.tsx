import { FlatList, StyleSheet } from "react-native";
import { View } from "../view";
import { TableHeaderProps, TableProps } from "./type";
import { Text } from "../text";
import TableHeader from "./TableHeader";

type Props<T = unknown> = TableProps<T> & TableHeaderProps<T>;
export default function Table<T = unknown>({
  dataSource,
  keyExtractor,
  columns,
  headerBackgroundColor,
  headerTextStyle,
  style,
}: Props<T>) {
  const renderItem = ({ item, index }: { item: T; index: number }) => {
    const isLastRow = index === dataSource.length - 1;
    return (
      <View style={[styles.itemRow, isLastRow && styles.lastRow]}>
        {columns.map((column, colIndex) => {
          return (
            <View key={`task_${index}_${colIndex}`} style={{ width: column.width }}>
              {column.type === "text" && (
                <Text style={{ textAlign: column.align || "left" }}>{String(item[column.dataIndex])}</Text>
              )}
              {column.type === "custom" && <>{column.render(item)}</>}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        ListHeaderComponent={
          <TableHeader
            columns={columns}
            headerBackgroundColor={headerBackgroundColor}
            headerTextStyle={headerTextStyle}
          />
        }
        keyExtractor={keyExtractor}
        style={style}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
});
