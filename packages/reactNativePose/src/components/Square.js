import React, { useMemo } from 'react';
import { View } from 'react-native';

import { colors } from '../utils/constants';

const defaultSize = 128;

const Square = function ({
  width = defaultSize,
  height = defaultSize,
  backgroundColor = colors.green
}) {
  const style = useMemo(
    () => ({
      width,
      height,
      backgroundColor
    }),
    [width, height, backgroundColor]
  );

  return <View style={style} />;
};

export default Square;
