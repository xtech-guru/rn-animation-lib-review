import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Image } from 'react-native-animatable';

import BellIcon from '../../assets/bell.png';
import { colors } from '../utils/contants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 156,
    height: 156
  }
});

const AnimationPreview = function ({ route: { params } }) {
  const animation = params?.animation;

  const [infinite, setInfinite] = useState(true);

  const onPress = useCallback(() => {
    setInfinite(false);
  }, [setInfinite]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={BellIcon}
          style={styles.img}
          animation={animation}
          iterationCount={infinite ? 'infinite' : undefined}
        />
      </View>
      <Button title="Stop animation" onPress={onPress} color={colors.red} />
    </View>
  );
};

export default AnimationPreview;
