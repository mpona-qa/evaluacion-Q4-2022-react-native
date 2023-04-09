import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Input} from './input';

describe('Input Component', () => {
  it('Should render a placeholder', () => {
    render(<Input placeholder="Add Gif" onChangeTextInput={jest.fn()} />);
    const input = screen.getByPlaceholderText('Add Gif');
    expect(input).toBeDefined();
  });
  it('Should execute onChangeText ', () => {
    const mockOnChange = jest.fn();
    render(<Input placeholder="Add Gif" onChangeTextInput={mockOnChange} />);
    const input = screen.getByPlaceholderText('Add Gif');
    fireEvent.changeText(input, 'Add Gif');
    expect(mockOnChange).toBeCalledWith('Add Gif');
  });
});
