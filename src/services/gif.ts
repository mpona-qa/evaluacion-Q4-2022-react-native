import axios from 'axios';
import {Gif} from '../utils/interfaces/gif';
import {AUTHOR_ID, URL_SERVICE} from '../utils/constants/service';

axios.defaults.timeout = 2000;

export const getGifs = async (): Promise<Gif[]> => {
  const responseGetGifs = await axios.get<Gif[]>(
    `${URL_SERVICE}/?author_id=${AUTHOR_ID}`,
  );

  if ((responseGetGifs.data as unknown as {code_error: string}).code_error) {
    throw new Error('No se pudo obtener el GIFs');
  }

  return responseGetGifs.data;
};

export const addGif = async (urlGif: string): Promise<Gif> => {
  const responseAddGifs = await axios.post<Gif>(`${URL_SERVICE}`, {
    url: urlGif,
    author_id: AUTHOR_ID,
  });

  if ((responseAddGifs.data as unknown as {code_error: string}).code_error) {
    throw new Error('No se pudo agregar el GIF');
  }

  return responseAddGifs.data;
};

export const removeGif = async (gifToRemove: Gif): Promise<boolean> => {
  const responseRemoveGifs = await axios.delete<Gif>(`${URL_SERVICE}`, {
    data: {
      author_id: AUTHOR_ID,
      ...gifToRemove,
    },
  });

  if (
    (responseRemoveGifs.data as unknown as {code_error: string})?.code_error
  ) {
    throw new Error('No se pudo eliminar el GIF');
  }

  return true;
};
