import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from "react-native";
import { List, Avatar, Appbar, Text } from 'react-native-paper';

import {
  Colors
} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  appBar: {
    textAlign: 'left',
    fontSize: 24,
    color: "#8596A0",
    fontWeight: "bold",
    backgroundColor: "#1F2C34"
  },
  listItem: {
    backgroundColor: "#121B22",
    paddingVertical: 20
  },
  listItemAvatar: {
    marginHorizontal: 10
  },
  listItemTitleStyle: {
    color: "#E9EDF0",
    fontSize: 18
  },
  listItemDescriptionStyle: {
    color: "#8596A0",
    marginLeft: 5
  },
  rowStyle: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  }
});

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#1F2C34" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? "#1F2C34" : Colors.white
          }}
        >
          <Appbar.Header style={styles.appBar} >
            <Appbar.Content title="(Not) WhatsApp" color="#8596A0" />
            <Appbar.Action icon="magnify" color="#8596A0" onPress={() => {}} />
            <Appbar.Action icon="dots-vertical" color="#8596A0" onPress={() => {}} />
          </Appbar.Header>
          <List.Item
            style={styles.listItem}
            title="Evan You"
            titleStyle={styles.listItemTitleStyle}
            descriptionStyle={styles.listItemDescriptionStyle}
            description={() =>
              <View style={styles.rowStyle}>
                <Avatar.Icon size={24} icon="check-all" />
                <Text style={styles.listItemDescriptionStyle}>
                  Message
                </Text>
              </View>
            }
            left={() => <Avatar.Image style={styles.listItemAvatar} size={48} source={require('./assets/evanYou.jpg')} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
