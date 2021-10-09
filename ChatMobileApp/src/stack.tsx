import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

import { StackNavigatorParamlist } from './types';
import { ChatDetails } from './chatDetails';
import { Home } from './home';

const styles = StyleSheet.create({
  appBar: {
    elevation: 0,
    textAlign: 'left',
    color: "#8596A0",
    fontWeight: "bold",
    backgroundColor: "#1F2C34"
  }
});

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => {
          return (
            <Appbar.Header style={styles.appBar} >
              <Appbar.Content title="(Not) WhatsApp" color="#8596A0" />
              <Appbar.Action icon="magnify" color="#8596A0" onPress={() => {}} />
              <Appbar.Action icon="dots-vertical" color="#8596A0" onPress={() => {}} />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetails}
      />
    </Stack.Navigator>
  );
};
