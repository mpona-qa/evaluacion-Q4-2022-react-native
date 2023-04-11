import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {AddInput, Card} from '../../molecules';
import AddIcon from '../../../utils/assets/AddIcon.png';
import WarningIcon from '../../../utils/assets/WarningIcon.png';
import {styles} from './gif-gallery.styles';
import {Icon} from '../../atoms';
import {useGifGallery} from './use-gif-gallery/use-gif-gallery';

const GifGallery: FC = () => {
  const {gifs, handleAddGif, handleDeleteGif} = useGifGallery();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gif Gallery</Text>
      </View>
      <AddInput
        onAdd={item => handleAddGif(item)}
        placeholder="Gif URL"
        image={AddIcon}
      />
      {gifs && gifs.length > 0 ? (
        <Card gif={gifs} onDeleteGif={item => handleDeleteGif(item)} />
      ) : (
        <View style={styles.noGifsContainer}>
          <Icon image={WarningIcon} description="No gifs in the gallery" />
        </View>
      )}
    </View>
  );
};

export default GifGallery;
