import { View } from '@packages/ui';
import { StyleSheet } from 'react-native';

export type PaginationDotsProps = {
  total: number;
  currentIndex: number;
  activeColor?: string;
  inactiveColor?: string;
  dotSize?: number;
  spacing?: number;
};

export default function PaginationDots({
  total,
  currentIndex,
  activeColor = '#DAA520',
  inactiveColor = '#C0C0C0',
  dotSize = 8,
  spacing = 8,
}: PaginationDotsProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index === currentIndex ? activeColor : inactiveColor,
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              marginHorizontal: spacing / 2,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  dot: {
    borderRadius: 4,
  },
});
