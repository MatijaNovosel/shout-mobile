import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { List, Avatar, Text, FAB } from 'react-native-paper';
import { range, getRandomNameAndSurname, randInt } from "./utils/helpers";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/miniavs';
import { SvgCss } from "react-native-svg";
import { MaterialIcon } from "./components/Icon";

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
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#00A884"
  }
});

interface User {
  id: number;
  fullName: string;
  svg: string;
}

const users = range(0, 25, 1).map<User>(n => {
  let svg = createAvatar(style, {
    seed: `user_${n}`
  });

  return {
    id: n + 1,
    fullName: getRandomNameAndSurname(),
    svg
  }
});

export const Chats = () => {
  return (
    <SafeAreaView>
      <FAB
        style={styles.fab}
        icon="message-reply-text"
        onPress={() => console.log('Pressed')}
      />
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {users.map(user =>
          <List.Item
            key={user.id}
            style={{
              backgroundColor: "#121B22"
            }}
            title={user.fullName}
            titleStyle={styles.listItemTitleStyle}
            description={() =>
              <View style={styles.rowStyle}>
                { randInt(0, 2) === 0 ? <MaterialIcon style={{ marginRight: 3 }} size="medium" color="#8596A0" name="check-all" /> : null }
                <Text style={styles.listItemDescriptionStyle}>
                  Message
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
                source={() => <SvgCss xml={user.svg} width="100%" height="100%" />}
              />
            }
            right={() =>
              <Text style={{
                color: "#87959E",
                marginTop: 10,
                marginRight: 5
              }}>
                Yesterday
              </Text>
            }
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}