import axios from 'axios';
import {addGif, getGifs, removeGif} from './gif-services';

describe('Gif services', () => {
  const mockCards = [
    {
      id: 1,
      url: 'uno',
    },
    {
      id: 2,
      url: 'dos',
    },
  ];

  it('should return a array when the getGifs service resposes ok', async () => {
    const mockGetGifs = jest.spyOn(axios, 'get').mockResolvedValue({
      data: mockCards,
    });

    const response = await getGifs();

    expect(mockGetGifs).toBeCalled();
    expect(response).toEqual(mockCards);
  });

  it('should return an error when the getGifs service resposes with code_error', async () => {
    const mockGetGifs = jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        code_error: 'Code error',
      },
    });

    try {
      await getGifs();
    } catch ({message}) {
      expect(mockGetGifs).toBeCalled();
      expect(message).toBe('No se pudo obtener el GIFs');
    }
  });

  it('should return a gif when the addGif service resposes ok', async () => {
    const mockAddGifs = jest.spyOn(axios, 'post').mockResolvedValue({
      data: mockCards[0],
    });

    const response = await addGif(mockCards[0].url);

    expect(mockAddGifs).toBeCalled();
    expect(response).toEqual(mockCards[0]);
  });

  it('should return an error when the addGif service resposes with code_error', async () => {
    const mockAddGifs = jest.spyOn(axios, 'post').mockResolvedValue({
      data: {
        code_error: 'Code error',
      },
    });

    try {
      await addGif(mockCards[0].url);
    } catch ({message}) {
      expect(mockAddGifs).toBeCalled();
      expect(message).toBe('No se pudo agregar el GIF');
    }
  });

  it('should return true when the removeGif service resposes ok', async () => {
    const mockDelete = jest.spyOn(axios, 'delete').mockResolvedValue({});

    const response = await removeGif({
      id: 1,
      url: '',
    });

    expect(mockDelete).toBeCalled();
    expect(response).toBeTruthy();
  });

  it('should return an error when the removeGif service resposes with code_error', async () => {
    const mockDelete = jest.spyOn(axios, 'delete').mockResolvedValue({
      data: {
        code_error: 'Code error',
      },
    });

    try {
      await removeGif({
        id: 1,
        url: '',
      });
    } catch ({message}) {
      expect(mockDelete).toBeCalled();
      expect(message).toBe('No se pudo eliminar el GIF');
    }
  });
});
