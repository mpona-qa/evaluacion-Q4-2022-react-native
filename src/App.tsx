import React from 'react';
import {SafeAreaView} from 'react-native';
import Main from './components/pages/main/main';
import {styles} from './App.styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
