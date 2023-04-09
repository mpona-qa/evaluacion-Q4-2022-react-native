import {StyleSheet} from 'react-native';
import {foreground} from '../../../utils/theme/theme';

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: 300,
    marginTop: 20,
    backgroundColor: foreground,
  },
  closeButton: {
    position: 'absolute',
    left: 245,
    top: 25,
  },
});

export {styles};
