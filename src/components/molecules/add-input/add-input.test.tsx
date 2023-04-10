import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {AddInput} from './add-input';
import AddIcon from '../../../utils/assets/AddIcon.png';

describe('AddInput Component', () => {
  it('Should render AddInput components', () => {
    render(<AddInput onAdd={jest.fn} placeholder="Add Gif" image={AddIcon} />);

    const input = screen.getByPlaceholderText('Add Gif');
    expect(input).toBeDefined();
    const icon = screen.getByTestId('iconID');
    expect(icon).toBeDefined();
  });

  it('Should execute onHandleButtonPress and execute onAdd', () => {
    const mockOnHandleButtonPress = jest.fn();
    render(
      <AddInput
        onAdd={mockOnHandleButtonPress}
        placeholder="Add Gif"
        image={AddIcon}
      />,
    );
    const input = screen.getByPlaceholderText('Add Gif');
    fireEvent.changeText(input, 'nuevo gif');
    const icon = screen.getByTestId('iconID');
    fireEvent.press(icon);
    expect(mockOnHandleButtonPress).toBeCalledWith('nuevo gif');
  });
});
