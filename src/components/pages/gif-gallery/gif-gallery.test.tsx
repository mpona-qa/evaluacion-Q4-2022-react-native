import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import * as Services from '../../../services/gif-services';
import GifGallery from './gif-gallery';

describe('Gallery component', () => {
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
  it('should render Gallery with empty message ', () => {
    jest.spyOn(Services, 'getGifs').mockResolvedValue([]);
    render(<GifGallery />);
    const title = screen.findByText('Gif Gallery');
    expect(title).toBeDefined();

    const input = screen.getByPlaceholderText('Gif URL');
    expect(input).toBeDefined();

    const emptyMessage = screen.findByText('No gifs in the gallery');
    expect(emptyMessage).toBeDefined();
  });

  it('should render a card list', () => {
    const mockAxiosGet = jest
      .spyOn(Services, 'getGifs')
      .mockResolvedValue(mockCards);
    render(<GifGallery />);
    expect(mockAxiosGet).toBeCalled();
    const cardOne = screen.findByTestId('1');
    expect(cardOne).toBeDefined();
    const cardTwo = screen.findByTestId('2');
    expect(cardTwo).toBeDefined();
  });

  it('should add a new gif', () => {
    const url = 'url_of_new_gif';
    jest.spyOn(Services, 'getGifs').mockResolvedValue([]);
    const mockAddService = jest.spyOn(Services, 'addGif').mockResolvedValue({
      url,
      id: 1,
    });
    render(<GifGallery />);
    const input = screen.getByPlaceholderText('Gif URL');
    expect(input).toBeDefined();
    fireEvent.changeText(input, url);
    const buttonAdd = screen.getByRole('button');
    expect(buttonAdd).toBeDefined();
    fireEvent.press(buttonAdd);
    expect(mockAddService).toBeCalledWith(url);
    const cardOne = screen.findByTestId('1');
    expect(cardOne).toBeDefined();
  });
});
