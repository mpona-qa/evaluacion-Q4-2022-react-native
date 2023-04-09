import React, {FC, ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onButtonPress: () => void;
  buttonStyle?: TouchableOpacityProps;
}

const Button: FC<ButtonProps> = ({children, onButtonPress, buttonStyle}) => {
  const onHandleOnPress = () => {
    onButtonPress();
  };
  return (
    <TouchableOpacity style={buttonStyle} onPress={onHandleOnPress}>
      {children}
    </TouchableOpacity>
  );
};

export {Button};
