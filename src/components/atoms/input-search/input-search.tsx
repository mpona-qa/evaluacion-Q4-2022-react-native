import React, {FC} from 'react';
import {FlexStyle, TextInput} from 'react-native';
import {styles} from './input-search.styles';

interface InputSearchProps {
  style?: FlexStyle;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const InputSearch: FC<InputSearchProps> = ({
  style,
  placeholder,
  onChangeText,
}) => {
  return (
    <TextInput
      style={[styles.inputSearch, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default InputSearch;
