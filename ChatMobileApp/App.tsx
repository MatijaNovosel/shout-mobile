import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { List, Avatar, Appbar, Text } from 'react-native-paper';
import {
  Tabs,
  TabScreen
} from 'react-native-paper-tabs';
import { range } from "./utils/helpers";

const styles = StyleSheet.create({
  appBar: {
    textAlign: 'left',
    color: "#8596A0",
    fontWeight: "bold",
    backgroundColor: "#1F2C34"
  },
  listItemTitleStyle: {
    color: "#E9EDF0",
    fontSize: 18
  },
  listItemDescriptionStyle: {
    color: "#8596A0"
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  }
});

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{
        backgroundColor: "#000000"
      }}>
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
        {range(0, 5, 1).map(n => <List.Item
          key={n}
          style={{
            backgroundColor: "#121B22"
          }}
          title="Evan You"
          titleStyle={styles.listItemTitleStyle}
          description={() =>
            <View style={styles.rowStyle}>
              <Text style={styles.listItemDescriptionStyle}>
                Message
              </Text>
            </View>
          }
          left={() => <Avatar.Image style={{
            marginHorizontal: 10,
            marginVertical: 5
          }} size={48} source={require('./assets/evanYou.jpg')} />}
        />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
