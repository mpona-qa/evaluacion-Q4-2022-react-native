import {render, screen, fireEvent} from '@testing-library/react-native';
import {Linking} from 'react-native';
import Documentation from './documentation';
import {primary, background} from '../../../../theme/theme';
import DeleteIcon from '../../../assets/DeleteIcon.png';
import WarningIcon from '../../../assets/WarningIcon.png';

describe('Documentation Component', () => {
  it('Should render the title"', () => {
    render(<Documentation />);
    const title = screen.getByText('Evaluación Técnica Q4 2022');
    expect(title).toBeDefined();
  });

  it('Should render Colores section', () => {
    render(<Documentation />);
    const titleColors = screen.getByText('Colores');
    expect(titleColors).toBeDefined();

    const mainColor = screen.getByText('Principal');
    expect(mainColor).toBeDefined();

    const color = screen.getByTestId(`indicator-${primary}`);
    expect(color).toBeDefined();

    const mainColorHexa = screen.getByText(primary);
    expect(mainColorHexa).toBeDefined();

    const backgroundColor = screen.getByText('Fondo');
    expect(backgroundColor).toBeDefined();

    const backgroundColorIndicator = screen.getByTestId(
      `indicator-${background}`,
    );
    expect(backgroundColorIndicator).toBeDefined();

    const backgroundColorHexa = screen.getByText(primary);
    expect(backgroundColorHexa).toBeDefined();
  });

  it('Should render Íconos section', () => {
    render(<Documentation />);
    const deleteIcon = screen.getByText('Delete Icon');
    expect(deleteIcon).toBeDefined();

    const imageDeleteIcon = screen.getByTestId('Delete Icon');
    expect(imageDeleteIcon.props.source).toBe(DeleteIcon);

    const warningIcon = screen.getByText('Warning Icon');
    expect(warningIcon).toBeDefined();

    const imageWarningIcon = screen.getByTestId('Warning Icon');
    expect(imageWarningIcon.props.source).toBe(WarningIcon);
  });

  it('Should render API REST section', () => {
    render(<Documentation />);
    const title = screen.getByText('API REST');
    expect(title).toBeDefined();

    const link = screen.getByText('Documentación de la API REST');
    expect(link).toBeDefined();
  });

  it('Should open API REST url', () => {
    const mockOpenUrl = jest.spyOn(Linking, 'openURL');
    render(<Documentation />);
    const link = screen.getByText('Documentación de la API REST');
    fireEvent.press(link);
    expect(mockOpenUrl).toHaveBeenCalledTimes(1);
  });

  it('Should render GIFs section', () => {
    render(<Documentation />);
    const title = screen.getByText('GIFs');
    expect(title).toBeDefined();

    const link = screen.getByText('Página de GIFs');
    expect(link).toBeDefined();
  });

  it('Should open GIFs url', () => {
    jest.resetAllMocks();
    const mockOpenUrl = jest.spyOn(Linking, 'openURL');
    render(<Documentation />);
    const link = screen.getByText('Página de GIFs');
    fireEvent.press(link);
    expect(mockOpenUrl).toHaveBeenCalledTimes(1);
  });
});
