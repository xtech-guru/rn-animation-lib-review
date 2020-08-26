import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { animationOptions, colors } from '../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  btnContainer: {
    paddingVertical: 4
  }
});

const Home = function () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        {animationOptions.map((option) => (
          <View key={option.label} style={styles.btnContainer}>
            <Button
              title={option.label}
              color={colors.blue}
              onPress={() => navigation.navigate('AnimationPreview', option)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
