import React, {FC} from 'react';
import {ImageSourcePropType, Text} from 'react-native';
import {IconContainer, IconImage} from './icon.styles';

type Props = {
  image: ImageSourcePropType;
  description: string;
};

const Icon: FC<Props> = props => {
  return (
    <IconContainer>
      <IconImage testID={props.description} source={props.image} />
      <Text>{props.description}</Text>
    </IconContainer>
  );
};

export default Icon;
