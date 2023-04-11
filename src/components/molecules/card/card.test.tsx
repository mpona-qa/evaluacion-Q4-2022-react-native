import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Card} from './card';

describe('Card Component', () => {
  const gifExample = [
    {
      id: 2,
      url: 'https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif',
    },
  ];
  it('Should render Card component', () => {
    render(<Card gif={gifExample} onDeleteGif={jest.fn()} />);
    const container = screen.getByTestId('2');
    expect(container).toBeDefined();
  });
  it('Should execute onDeleteGif when the remove button is clicked', () => {
    const mockOnDeleteGif = jest.fn();
    render(<Card gif={gifExample} onDeleteGif={mockOnDeleteGif} />);
    const button = screen.getByTestId('iconID');
    fireEvent.press(button);
    expect(mockOnDeleteGif).toBeCalledWith(gifExample[0]);
  });
});
