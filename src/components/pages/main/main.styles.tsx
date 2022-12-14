import styled from 'styled-components/native';

interface IndicatorProps {
  color: string;
}

interface RowContainerProps {
  haveBottomSpacing?: boolean;
}

interface DocumentationTitleProps {
  headerTitle?: boolean;
}

export const DocumentationContainer = styled.View`
  padding: 20px;
`;

export const DocumentationTitle = styled.Text<DocumentationTitleProps>`
  font-size: 24px;
  font-weight: bold;

  ${props =>
    !props.headerTitle &&
    `
    font-size: 20px
    margin: 20px 0;
  `};
`;

export const ColorTitle = styled.Text`
  min-width: 70px;
`;

export const RowContainer = styled.View<RowContainerProps>`
  flex-direction: row;
  align-items: center;
  ${props =>
    props.haveBottomSpacing &&
    `
    margin-bottom: 10px;
  `};
`;

export const ColorIndicator = styled.View<IndicatorProps>`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  background-color: ${props => props.color};
  border-radius: 20px;
`;

export const ExternalLink = styled.Text`
  color: blue;
  text-decoration: underline;
`;
