import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './src/navigation';
import { colors } from './src/utils/constants';

const App = function () {
  return (
    <>
      <StatusBar backgroundColor={colors.darkBlue} />
      <Navigation />
    </>
  );
};

export default App;
