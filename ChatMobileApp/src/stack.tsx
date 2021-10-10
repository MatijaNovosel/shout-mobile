import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackNavigatorParamlist } from './types';
import { ChatDetails } from './chatDetails';
import { Home } from './home';
import { CustomAppBar } from './components/AppBar';

const Stack = createStackNavigator<StackNavigatorParamlist>();

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={horizontalAnimation}
      />
    </Stack.Navigator>
  );
};
