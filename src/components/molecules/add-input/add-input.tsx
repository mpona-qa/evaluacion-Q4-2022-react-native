import React, {FC, useEffect, useState} from 'react';
import {ImageSourcePropType, View, ViewProps} from 'react-native';
import {Input, Icon, Button} from '../../atoms';
import {styles} from './add-text.styles';

interface AddTextProps {
  style?: ViewProps;
  image: ImageSourcePropType;
  onAdd: (event: string) => void;
  placeholder: string;
  value?: string;
}

const AddInput: FC<AddTextProps> = ({style, image, onAdd, placeholder}) => {
  const [currentValue, setCurrentValue] = useState<string>('');

  const onHandleChangeText = (text: string) => {
    setCurrentValue(text);
  };

  const onHandleButtonPress = () => {
    onAdd(currentValue);
    setCurrentValue('');
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <Input
          value={currentValue}
          placeholder={placeholder}
          onChangeTextInput={onHandleChangeText}
        />
      </View>
      <Button onButtonPress={onHandleButtonPress}>
        <Icon image={image} />
      </Button>
    </View>
  );
};

export {AddInput};
