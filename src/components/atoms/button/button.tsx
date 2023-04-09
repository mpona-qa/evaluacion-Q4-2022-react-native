import React, {FC, ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onButtonPress: () => void;
  buttonStyle?: ViewStyle;
  accessibilityLabel?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onButtonPress,
  buttonStyle,
  accessibilityLabel,
}) => {
  const onHandleOnPress = () => {
    onButtonPress();
  };
  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={buttonStyle}
      onPress={onHandleOnPress}>
      {children}
    </TouchableOpacity>
  );
};

export {Button};
