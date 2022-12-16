import React, {FC} from 'react';
import {INPUT_SEARCH} from '../../../utils/constants/strings';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {styles} from './main-template-styles';
import SearchView from '../../organisms/view/search-view';

interface MainTemplateProps {
  children: React.ReactNode;
  style?: ViewProps;
  placeholder: string;
  onChangeText: (text: string) => void;
  warningIcon: ImageSourcePropType;
  description?: string;
  onPress: (event: GestureResponderEvent) => void;
  data: any;
  status: any;
}

const MainTemplate: FC<MainTemplateProps> = ({
  children,
  style,
  placeholder,
  onChangeText,
  warningIcon,
  onPress,
  data,
  status,
}) => {
  return (
    <View style={[styles.mainTemplate, style]}>
      <SearchView
        placeholder={placeholder}
        onChangeText={onChangeText}
        warningIcon={warningIcon}
        onPress={onPress}
        data={data}
        status={status}>
        {children}
      </SearchView>
    </View>
  );
};

export default MainTemplate;
