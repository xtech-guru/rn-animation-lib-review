import React, { useMemo } from 'react';
import { View } from 'react-native';

import { colors } from '../utils/constants';

const defaultSize = 128;

const Circle = function ({ size = defaultSize, backgroundColor = colors.red }) {
  const style = useMemo(
    () => ({
      width: size,
      height: size,
      backgroundColor,
      borderRadius: size / 2
    }),
    [size, backgroundColor]
  );

  return <View style={style} />;
};

export default Circle;
