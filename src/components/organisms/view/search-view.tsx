import React, {FC} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ScrollView,
  View,
  ViewProps,
} from 'react-native';
import {styles} from './search-view.styles';
import HeaderLeadTitle from '../../molecules/header-lead-title/header-lead-title';
import Card from '../../atoms/card/card';
import Icon from '../../atoms/icon/icon';
import DeleteIcon from '../../../utils/assets/delete-icon.png';

interface SearchViewProps {
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

const SearchView: FC<SearchViewProps> = ({
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
    <View style={[styles.searchView, style]}>
      <HeaderLeadTitle
        placeholder={placeholder}
        onChangeText={onChangeText}
        warningIcon={warningIcon}
        onPress={onPress}>
        {children}
      </HeaderLeadTitle>

      <ScrollView>
        {status === 'success'
          ? data?.map(item => (
              <View style={styles.card}>
                <Card uri={item.url} />
                <View style={styles.closeButton}>
                  <Icon image={DeleteIcon} onPress={console.log('')} />
                </View>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default SearchView;
