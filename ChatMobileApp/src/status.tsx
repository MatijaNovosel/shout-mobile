import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { List, Avatar, Text } from 'react-native-paper';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/miniavs';
import { SvgCss } from "react-native-svg";

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

const svg = createAvatar(style, {
  seed: `user_1`
});

export const Status = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List.Item
          style={{
            backgroundColor: "#121B22"
          }}
          title="My status"
          titleStyle={styles.listItemTitleStyle}
          description={() =>
            <View style={styles.rowStyle}>
              <Text style={styles.listItemDescriptionStyle}>
                Tap to add status update
              </Text>
            </View>
          }
          left={() =>
            <Avatar.Image
              style={{
                marginHorizontal: 10,
                marginVertical: 5
              }}
              size={48}
              source={() => <SvgCss xml={svg} width="100%" height="100%" />}
            />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}