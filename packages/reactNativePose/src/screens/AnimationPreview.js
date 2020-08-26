import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Pose from 'react-native-pose';

import { Circle, Square } from '../components';
import { colors } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const components = {
  square: <Square />,
  circle: <Circle />
};

const VisibilityConfig = {
  true: 'visible',
  false: 'hidden'
};

const AnimationPreview = function ({ route: { params } }) {
  const [visible, setVisible] = useState(params.visible);

  const onPress = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, [setVisible]);

  const AnimatableView = useMemo(() => Pose.View(params.animation), [
    params.animation
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AnimatableView pose={VisibilityConfig[visible]}>
          {components[params?.component]}
        </AnimatableView>
      </View>
      <Button title="Animate" onPress={onPress} color={colors.yellow} />
    </View>
  );
};

export default AnimationPreview;
