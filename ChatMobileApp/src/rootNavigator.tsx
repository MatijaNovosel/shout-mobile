import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { StackNavigator } from './stack';
import { ImageBackground } from 'react-native';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  },
};

export const RootNavigator = () => {
  return (
    <ImageBackground
      style={{
        flex: 1
      }}
      source={require('../assets/wappDarkBg.jpg')}
      resizeMode="cover"
    >
      <NavigationContainer theme={Theme}>
        <StackNavigator />
      </NavigationContainer>
    </ImageBackground>
  );
};
