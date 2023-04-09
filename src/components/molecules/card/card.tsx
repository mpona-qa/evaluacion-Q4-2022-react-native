import React, {FC} from 'react';
import {FlatList, Image, ScrollViewProps, View} from 'react-native';
import {styles} from './card.styles';
import {Button, Icon} from '../../atoms';
import DeleteIcon from '../../../utils/assets/DeleteIcon.png';
import {Gif} from '../../../utils/interfaces/gif';

interface CardProps {
  style?: ScrollViewProps;
  gif: Gif[];
  onDeleteGif: (gif: Gif) => void;
}

const Card: FC<CardProps> = ({style, gif, onDeleteGif}) => {
  const onHandlePress = (inputGif: Gif) => {
    onDeleteGif(inputGif);
  };
  return (
    <FlatList
      style={style}
      data={gif}
      keyExtractor={item => item.id?.toString()}
      renderItem={({item}) => {
        console.log('RENDER ITEM');
        return (
          <View>
            <Image
              style={styles.card}
              source={{
                uri: item.url,
              }}
            />
            <View style={styles.closeButton}>
              <Button onButtonPress={() => onHandlePress(item)}>
                <Icon image={DeleteIcon} />
              </Button>
            </View>
          </View>
        );
      }}
    />
  );
};

export {Card};
