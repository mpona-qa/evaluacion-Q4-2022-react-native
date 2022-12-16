import React, {FC, useState} from 'react';
import {AUTHOR_ID, INPUT_SEARCH} from '../../../utils/constants/strings';
import {View} from 'react-native';
import {styles} from './main.styles';
import AddIcon from '../../../utils/assets/add-icon.png';
import MainTemplate from '../../templates/main-template/main-template';
import UseGiftFetch from '../../../hooks/use-gift-fetch/use-gift-fetch';
import {ADD_API, GIFS_API} from '../../../utils/constants/urls';
import {createItem} from '../../../services/gift/gift-service';

const Main: FC = () => {
  const [addGift, setAddGift] = useState<string>('');
  const {data, status} = UseGiftFetch(GIFS_API);
  return (
    <View style={styles.container}>
      <MainTemplate
        placeholder={INPUT_SEARCH}
        onChangeText={(value: string) => setAddGift(value)}
        warningIcon={AddIcon}
        onPress={() => {
          createItem(ADD_API, {url: addGift, author_id: AUTHOR_ID});
        }}
        data={data}
        status={status}>
        Gift Galery
      </MainTemplate>
    </View>
  );
};

export default Main;
