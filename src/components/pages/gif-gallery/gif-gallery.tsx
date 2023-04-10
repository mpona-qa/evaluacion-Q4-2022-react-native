import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {AddInput, Card} from '../../molecules';
import AddIcon from '../../../utils/assets/AddIcon.png';
import WarningIcon from '../../../utils/assets/WarningIcon.png';
import {styles} from './gif-gallery.styles';
import {Gif} from '../../../utils/interfaces/gif';
import {Icon} from '../../atoms';
import {addGif, getGifs, removeGif} from '../../../services/gif-services';

const GifGallery: FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    getGifs()
      .then(responseGifs => {
        setGifs(responseGifs);
      })
      .catch(() => {
        console.log('No se pudo obtener los GIFs');
      });
  }, []);

  const handleAddGif = async (urlGif: string) => {
    try {
      if (!urlGif) {
        throw new Error('Debe agregar una cadena de texto');
      }

      const response = await addGif(urlGif);
      setGifs([...gifs, response]);
    } catch (error) {
      console.log(
        (error as {message: string})?.message ?? 'No se pudo agregar el GIF',
      );
    }
  };

  const handleDeleteGif = (gif: Gif) => {
    removeGif(gif)
      .then(() => {
        const newGifs = gifs.filter(item => item.id !== gif.id);
        setGifs(newGifs);
      })
      .catch(() => {
        console.log('No se pudo eliminar el GIF');
      });
  };

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
