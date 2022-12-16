import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './lead-title.styles';

interface LeadTitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const LeadTitle: FC<LeadTitleProps> = ({children, style}) => {
  return <Text style={[styles.leadTitle, style]}>{children}</Text>;
};

export default LeadTitle;
