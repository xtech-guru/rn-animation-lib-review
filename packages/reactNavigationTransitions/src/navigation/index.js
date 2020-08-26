import React, { useCallback } from 'react';
import { View, Button, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

const Home = function ({ navigation }) {
  const onPress = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  return (
    <View>
      <Button title="About Screen" onPress={onPress} />
    </View>
  );
};

const About = function () {
  return <Text>About</Text>;
};

const StackNavigator = createStackNavigator({
  Home: createFluidNavigator({
    screen1: Home,
    screen2: About
  }),
  About
});

const Navigator = createAppContainer(StackNavigator);

export default Navigator;
