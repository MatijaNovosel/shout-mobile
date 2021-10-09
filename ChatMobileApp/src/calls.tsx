import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { List, Avatar, Text } from 'react-native-paper';
import { range, getRandomNameAndSurname, randInt } from "./utils/helpers";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/miniavs';
import { SvgCss } from "react-native-svg";
import { MaterialIcon } from "./components/Icon";
import { format } from "date-fns";

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

interface User {
  id: number;
  fullName: string;
  svg: string;
}

const users = range(0, 12, 1).map<User>(n => {
  let svg = createAvatar(style, {
    seed: `user_${n}`
  });

  return {
    id: n + 1,
    fullName: getRandomNameAndSurname(),
    svg
  }
});

export const Calls = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: "#000000" }}>
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
                <MaterialIcon
                  style={{ marginRight: 3 }}
                  size="medium"
                  color={randInt(0, 2) === 0 ? "#5cb52b" : "#a11818"}
                  name={randInt(0, 2) === 0 ? "arrow-bottom-left-thick" : "arrow-top-right-thick"}
                />
                <Text style={styles.listItemDescriptionStyle}>
                  { format(new Date(), "dd.MM.yyyy. hh:mm") }
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
            right={() => <MaterialIcon style={{ marginRight: 5, marginTop: 15 }} size="large" color="#00A884" name="phone" />}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}