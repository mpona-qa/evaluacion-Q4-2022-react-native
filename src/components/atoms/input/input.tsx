import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './input.styles';

interface InputProps {
  style?: TextInputProps;
  onChangeTextInput: (text: string) => void;
  placeholder: string;
  value?: string | undefined;
}

const Input: FC<InputProps> = ({
  style,
  value,
  onChangeTextInput,
  placeholder,
}) => {
  const onHandleChangeText = (input: string) => {
    onChangeTextInput(input);
  };

  return (
    <TextInput
      value={value}
      style={[styles.textInput, style]}
      onChangeText={onHandleChangeText}
      placeholder={placeholder}
    />
  );
};

export {Input};
