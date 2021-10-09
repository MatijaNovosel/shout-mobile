import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

import { Chats } from './chats';
import { Status } from './status';
import { Calls } from './calls';

import { StackNavigatorParamlist } from './types';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

const styles = StyleSheet.create({
  appBar: {
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
      initialRouteName="Chats"
      screenOptions={{
        header: () => {
          return (
            <View>
              <Appbar.Header style={styles.appBar} >
                <Appbar.Content title="(Not) WhatsApp" color="#8596A0" />
                <Appbar.Action icon="magnify" color="#8596A0" onPress={() => {}} />
                <Appbar.Action icon="dots-vertical" color="#8596A0" onPress={() => {}} />
              </Appbar.Header>
              <Tabs
                defaultIndex={1}
                mode="fixed"
                style={{
                  backgroundColor: '#1F2C34',
                  color: "#ffffff"
                }}
              >
                <TabScreen label="" icon="camera">
                  <View style={{ backgroundColor: 'black', flex:1 }} />
                </TabScreen>
                <TabScreen label="Chats">
                  <View style={{ backgroundColor: 'black', flex:1 }} />
                </TabScreen>
                <TabScreen label="Status">
                  <View style={{ backgroundColor: 'red', flex:1 }} />
                </TabScreen>
                <TabScreen label="Calls">
                  <View style={{ backgroundColor: 'red', flex:1 }} />
                </TabScreen>
              </Tabs>
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="Chats"
        component={Chats}
      />
      <Stack.Screen
        name="Status"
        component={Status}
      />
      <Stack.Screen
        name="Calls"
        component={Calls}
      />
    </Stack.Navigator>
  );
};
