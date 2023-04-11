import {useEffect, useState} from 'react';
import {Gif} from '../../../../utils/interfaces/gif';
import {addGif, getGifs, removeGif} from '../../../../services/gif-services';

const useGifGallery = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    getGifs().then(responseGifs => {
      setGifs(responseGifs);
    });
  }, []);

  const handleAddGif = async (urlGif: string) => {
    try {
      if (!urlGif) {
        return;
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
    removeGif(gif).then(() => {
      const newGifs = gifs.filter(item => item.id !== gif.id);
      setGifs(newGifs);
    });
  };

  return {gifs, setGifs, handleAddGif, handleDeleteGif};
};

export {useGifGallery};
