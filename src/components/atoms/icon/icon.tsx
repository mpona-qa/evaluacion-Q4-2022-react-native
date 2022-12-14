import React, {FC} from 'react';
import {ImageSourcePropType, Text} from 'react-native';
import {IconContainer, IconImage} from './icon.styles';

interface IconProps {
  image: ImageSourcePropType;
  description: string;
}

const Icon: FC<IconProps> = props => {
  return (
    <IconContainer>
      <IconImage testID={props.description} source={props.image} />
      <Text>{props.description}</Text>
    </IconContainer>
  );
};

export default Icon;
