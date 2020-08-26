import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../utils/constants';
import { Home, AnimationPreview } from '../screens';

const Stack = createStackNavigator();


const screenOptions = {
  title: 'React Native Pose App',
  headerStyle: {
    backgroundColor: colors.blue,
    elevation: 0
  },
  headerTitleStyle: {
    color: colors.white
  },
  headerTintColor: colors.white
};

const Navigator = function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AnimationPreview"
          component={AnimationPreview}
          options={({ route }) => ({ title: route.params.label })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
