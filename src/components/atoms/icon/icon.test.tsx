import React from 'react';
import {render, screen} from '@testing-library/react-native';
import DeleteIcon from '../../../assets/delete-icon.png';
import {Icon} from './icon';

describe('Icon Component', () => {
  test('Should render a text', () => {
    render(<Icon image={DeleteIcon} description={'Delete Icon'} />);
    const text = screen.getByText('Delete Icon');
    expect(text).toBeDefined();
  });

  test('Should render an image', () => {
    render(<Icon image={DeleteIcon} description={'Delete Icon'} />);
    const image = screen.getByTestId('Delete Icon');
    expect(image.props.source).toBe(DeleteIcon);
  });
});
