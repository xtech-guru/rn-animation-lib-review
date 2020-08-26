import React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  bounceAnimationOptions,
  colors,
  fadeAnimationOptions,
  flipAnimationOptions,
  slideAnimationOptions,
  variousAnimationOptions,
  zoomAnimationOptions
} from '../utils/contants';
import { AnimationPreview } from '../screens';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  btnContainer: {
    paddingVertical: 4
  }
});

const TabScreen = function ({ options = [] }) {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.tab}>
      <View>
        {options.map((option) => (
          <View key={option.label} style={styles.btnContainer}>
            <Button
              title={option.label}
              color={colors.blue}
              onPress={() => navigation.navigate('AnimationPreview', option)}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const FadeTab = function () {
  return <TabScreen options={fadeAnimationOptions} />;
};

const SlideTab = function () {
  return <TabScreen options={slideAnimationOptions} />;
};

const ZoomTab = function () {
  return <TabScreen options={zoomAnimationOptions} />;
};

const BounceTab = function () {
  return <TabScreen options={bounceAnimationOptions} />;
};

const FlipTab = function () {
  return <TabScreen options={flipAnimationOptions} />;
};

const VariousTab = function () {
  return <TabScreen options={variousAnimationOptions} />;
};

const tabBarOptions = {
  scrollEnabled: true,
  style: {
    backgroundColor: colors.blue
  },
  activeTintColor: colors.white,
  labelStyle: {
    fontWeight: 'bold'
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.white
  }
};

const TabNavigator = function () {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Fade" component={FadeTab} />
      <Tab.Screen name="Slide" component={SlideTab} />
      <Tab.Screen name="Zoom" component={ZoomTab} />
      <Tab.Screen name="Bounce" component={BounceTab} />
      <Tab.Screen name="Flip" component={FlipTab} />
      <Tab.Screen name="Various" component={VariousTab} />
    </Tab.Navigator>
  );
};

const screenOptions = {
  title: 'React Native Animations App',
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
        <Stack.Screen name="Home" component={TabNavigator} />
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
