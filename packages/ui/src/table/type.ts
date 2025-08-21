import { ReactNode } from "react";
import { TextProps } from "../text";
import { StyleProp, ViewStyle } from "react-native";

interface TableGenericColumn<T> {
  title: string | ReactNode;
  dataIndex: keyof T;
  width?: number;
  align?: "left" | "center" | "right";
}

interface TableDefaultColumn<T> extends TableGenericColumn<T> {
  type: "text";
}

interface TableCustomColumn<T> extends TableGenericColumn<T> {
  type: "custom";
  render: (item: T) => JSX.Element;
}

type TableColumn<T> = TableDefaultColumn<T> | TableCustomColumn<T>;

interface SharedTableProps<T> {
  columns: TableColumn<T>[];
}

interface TableProps<T> extends SharedTableProps<T> {
  dataSource: T[];
  keyExtractor: (item: T, index: number) => string;
  style?: StyleProp<ViewStyle>;
}

interface TableHeaderProps<T> extends SharedTableProps<T> {
  headerBackgroundColor?: string;
  headerTextStyle?: TextProps["style"];
}

export type { TableColumn, TableProps, TableHeaderProps };
