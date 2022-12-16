import React, {FC} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import LeadTitle from '../../atoms/lead-title/lead-title';
import {styles} from './header-lead-title.styles';
import InputSearch from '../../atoms/input-search/input-search';
import Icon from '../../atoms/icon/icon';

interface HeaderLeadTitleProps {
  children: React.ReactNode;
  style?: ViewProps;
  placeholder: string;
  onChangeText: (text: string) => void;
  warningIcon: ImageSourcePropType;
  description?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const HeaderLeadTitle: FC<HeaderLeadTitleProps> = ({
  children,
  style,
  placeholder,
  onChangeText,
  warningIcon,
  description,
  onPress,
}) => {
  return (
    <View style={[styles.headerLeadTitle, style]}>
      <LeadTitle style={styles.leadTitle}>{children}</LeadTitle>
      <View style={styles.buttonsContainer}>
        <InputSearch
          style={styles.inputSearch}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        <Icon image={warningIcon} description={description} onPress={onPress} />
      </View>
    </View>
  );
};

export default HeaderLeadTitle;
