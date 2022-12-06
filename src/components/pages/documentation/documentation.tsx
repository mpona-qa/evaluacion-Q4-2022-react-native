import React, {FC} from 'react';
import {
  ColorIndicator,
  ColorTitle,
  DocumentationContainer,
  DocumentationTitle,
  ExternalLink,
  RowContainer,
} from './documentation.styles';
import {primary, background} from '../../../../theme/theme';
import DeleteIcon from '../../../assets/DeleteIcon.png';
import WarningIcon from '../../../assets/WarningIcon.png';
import Icon from '../../atoms/icon/icon';
import {Linking, Text} from 'react-native';

const API_URL = 'https://documenter.getpostman.com/view/21329689/2s8YsnYwZr';
const GIFS_URL = 'https://tenor.com/es-419/search/avengers-gifs';

const Documentation: FC = () => {
  return (
    <DocumentationContainer>
      <DocumentationTitle headerTitle>
        Evaluación Técnica Q4 2022
      </DocumentationTitle>
      <DocumentationTitle>Colores</DocumentationTitle>
      <RowContainer haveBottomSpacing>
        <ColorTitle>Principal</ColorTitle>
        <ColorIndicator testID={`indicator-${primary}`} color={primary} />
        <Text>{primary}</Text>
      </RowContainer>
      <RowContainer>
        <ColorTitle>Fondo</ColorTitle>
        <ColorIndicator testID={`indicator-${background}`} color={background} />
        <Text>{background}</Text>
      </RowContainer>
      <DocumentationTitle>Íconos</DocumentationTitle>
      <RowContainer>
        <Icon image={DeleteIcon} description={'Delete Icon'} />
        <Icon image={WarningIcon} description={'Warning Icon'} />
      </RowContainer>

      <DocumentationTitle>API REST</DocumentationTitle>
      <ExternalLink onPress={() => Linking.openURL(API_URL)}>
        Documentación de la API REST
      </ExternalLink>
      <DocumentationTitle>GIFs</DocumentationTitle>
      <ExternalLink onPress={() => Linking.openURL(GIFS_URL)}>
        Página de GIFs
      </ExternalLink>
    </DocumentationContainer>
  );
};

export default Documentation;
