import {StyleSheet} from 'react-native';
import {foreground, primary} from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    fontSize: 20,
    backgroundColor: foreground,
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 10,
    width: 270,
  },
});

export {styles};
