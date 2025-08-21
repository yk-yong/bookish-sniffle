import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren, ReactNode } from 'react';

import { View } from '../view';
import { CollapsedIcon, ExpandedIcon } from './components';
import { Text } from '../text';

type Props = PropsWithChildren<{
  title: string | ReactNode;
  defaultVisible?: boolean;
  visible: boolean;
  onToggle: (e?: GestureResponderEvent) => void;
}>;
export default function Accordion({
  title,
  children,
  visible,
  onToggle,
}: Props) {
  return (
    <View>
      <Pressable style={styles.accordionHeader} onPress={onToggle}>
        <View>
          {typeof title === 'string' && <Text>{title}</Text>}
          {typeof title !== 'string' && title}
        </View>
        {visible ? <ExpandedIcon /> : <CollapsedIcon />}
      </Pressable>
      {visible && <View style={styles.accordionBody}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionBody: {
    paddingVertical: 16,
  },
});
export type { Props as AccordionProps };
