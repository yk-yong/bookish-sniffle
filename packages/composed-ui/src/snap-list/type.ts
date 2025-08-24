import { ListRenderItem } from 'react-native';

export interface ISnapListData {
  id: string;
  title: string;
}

export interface ISnapListProps<TDataSource extends ISnapListData> {
  dataSource: Array<TDataSource>;
  renderItem: ListRenderItem<TDataSource>;
  keyExtractor: (item: TDataSource, index: number) => string;
  itemWidth?: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
