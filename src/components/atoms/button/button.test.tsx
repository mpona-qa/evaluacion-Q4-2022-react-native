import {render, screen, fireEvent} from '@testing-library/react-native';
import {Button} from './button';
import React from 'react';
import {Text} from 'react-native';

describe('Button test', () => {
  it('Should render the button ', () => {
    render(
      <Button onButtonPress={jest.fn()}>
        <Text>Aceptar</Text>
      </Button>,
    );

    const button = screen.getByRole('button', {name: 'Aceptar'});
    expect(button).toBeDefined();
  });
  it('Should execute onPress when the button is clicked ', () => {
    const mockOnClick = jest.fn();
    render(
      <Button onButtonPress={mockOnClick}>
        <Text>Aceptar</Text>
      </Button>,
    );

    const button = screen.getByRole('button', {name: 'Aceptar'});
    fireEvent.press(button);
    expect(mockOnClick).toBeCalled();
  });
  it('Should render the button with correctly styles ', () => {
    render(
      <Button buttonStyle={{backgroundColor: 'red'}} onButtonPress={jest.fn()}>
        <Text>Aceptar</Text>
      </Button>,
    );
    const button = screen.getByRole('button', {name: 'Aceptar'});
    expect(button.props.style.backgroundColor).toEqual('red');
  });
  it('Should read the accessibility label successfully. ', () => {
    render(
      <Button
        accessibilityLabel="Agregar un nuevo gif"
        buttonStyle={{backgroundColor: 'red'}}
        onButtonPress={jest.fn()}>
        <Text>Aceptar</Text>
      </Button>,
    );
    const button = screen.getByRole('button', {name: 'Aceptar'});
    expect(button.props.accessibilityLabel).toEqual('Agregar un nuevo gif');
  });
});
