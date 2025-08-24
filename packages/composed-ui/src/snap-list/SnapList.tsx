import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { List, PaginationDots, View } from '@quanta-studio/ui';

import { ISnapListData, ISnapListProps } from './type';

type Props<TDataSource extends ISnapListData> = ISnapListProps<TDataSource>;
export default function SnapList<TDataSource extends ISnapListData>({
  dataSource,
  renderItem,
  keyExtractor,
  currentIndex,
  setCurrentIndex,
  itemWidth = 100,
}: Props<TDataSource>) {
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const viewableIndex = viewableItems[0].index || 0;
      setCurrentIndex(viewableIndex);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <List
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
      />

      <PaginationDots
        total={dataSource.length}
        currentIndex={currentIndex}
        activeColor="#DAA520"
        inactiveColor="#C0C0C0"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
