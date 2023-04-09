import React, {FC} from 'react';
import {Image, ImageProps, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './icon.styles';

type IconProps = {
  style?: ImageProps;
  image: ImageSourcePropType;
  description?: string;
};

const Icon: FC<IconProps> = ({style, image, description}) => {
  return (
    <View>
      <Image testID="iconID" source={image} style={[styles.icon, style]} />
      {description && description.length > 0 && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

export {Icon};
