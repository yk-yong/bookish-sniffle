import { PropsWithChildren } from 'react';
import { View } from '../view';
import { Pressable, Modal as ReactNativeModal, StyleSheet } from 'react-native';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;
export default function Modal({ isVisible, onClose, children }: Props) {
  return (
    <ReactNativeModal
      visible={isVisible}
      onRequestClose={onClose}
      transparent
      animationType="fade"
    >
      <Pressable onPress={onClose} style={StyleSheet.absoluteFill}>
        <View style={styles.overlay} />
      </Pressable>

      {children}
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
