import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { List, Avatar, Text } from 'react-native-paper';
import { range } from "./utils/helpers";

const styles = StyleSheet.create({
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

export const Chats = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{
        backgroundColor: "#000000"
      }}>
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
          }} size={48} source={require('../assets/evanYou.jpg')} />}
        />)}
      </ScrollView>
  </SafeAreaView>
  );
}