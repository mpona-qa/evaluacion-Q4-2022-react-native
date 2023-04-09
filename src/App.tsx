import React from 'react';
import {SafeAreaView} from 'react-native';
import GifGallery from './components/pages/gif-gallery/gif-gallery';
import {styles} from './App.styles';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <GifGallery />
    </SafeAreaView>
  );
};

export default App;
