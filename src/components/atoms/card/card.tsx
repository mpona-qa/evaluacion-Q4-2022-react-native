import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';
import {styles} from './card.styles';

interface InputSearchProps {
  style?: ImageProps;
  uri: string;
}

const Card: FC<InputSearchProps> = ({style, uri}) => {
  return <Image style={[styles.card, style]} source={{uri}} />;
};

export default Card;
