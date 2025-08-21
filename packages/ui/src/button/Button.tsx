import {
  CustomButtonProps,
  CustomButtonTextProps,
} from '@newss/ui/components/button/type';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { Text } from '../text';
import ButtonConfig from './button.config';

type Props = CustomButtonProps & PressableProps & CustomButtonTextProps;
export default function Button({
  type = 'primary',
  textProps,
  children,
  ...props
}: Props) {
  if (type === 'text') {
    if (typeof children === 'string') {
      return (
        <Pressable android_ripple={ButtonConfig.AndroidRipple} {...props}>
          <Text {...textProps}>{children}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable android_ripple={ButtonConfig.AndroidRipple} {...props}>
        {children}
      </Pressable>
    );
  }

  if (typeof children === 'string') {
    return (
      <Pressable
        android_ripple={ButtonConfig.AndroidRipple}
        style={styles.primaryContainer}
        {...props}
      >
        <Text style={styles.primaryText} {...textProps}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable android_ripple={ButtonConfig.AndroidRipple} {...props}>
      {children}
    </Pressable>
  );
}

export type { Props as ButtonProps };

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    borderRadius: 4,
  },
  primaryText: {
    color: '#1D8793',
    fontSize: 16,
  },
});
