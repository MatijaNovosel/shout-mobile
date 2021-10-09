import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { StackNavigator } from './stack';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121B22"
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
