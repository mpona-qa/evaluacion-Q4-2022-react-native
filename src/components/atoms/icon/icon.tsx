import React, {FC} from 'react';
import {GestureResponderEvent, ImageSourcePropType, Text} from 'react-native';
import {IconContainer, IconImage} from './icon.styles';

interface IconProps {
  image: ImageSourcePropType;
  description?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Icon: FC<IconProps> = props => {
  return (
    <IconContainer onPress={props.onPress}>
      <IconImage testID={props.description} source={props.image} />
      <Text>{props.description}</Text>
    </IconContainer>
  );
};

export default Icon;
