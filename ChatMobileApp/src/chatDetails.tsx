import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { ChatMessage } from "./components/Chat/ChatMessage";
import { ChatMessage as ChatMessageModel } from "./models/chat";
import { loremIpsum } from "./utils/constants";
import { randInt, range } from "./utils/helpers";

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#1F2C34"
  }
});

export const ChatDetails = () => {
  const messages: ChatMessageModel[] = range(0, 15, 1).map((n) => ({
    content: loremIpsum.substring(0, randInt(40, loremIpsum.length)),
    sentAt: new Date(),
    userId: randInt(0, 2)
  }));

  let scrollViewRef: ScrollView | null = null;

  const [FABVisible, setFABVisible] = useState<boolean>(true);

  const scrollToEnd = () => {
    scrollViewRef?.scrollToEnd({ animated: false });
  }

  useEffect(() => {
    scrollToEnd();
  }, [])

  return (
    <SafeAreaView>
      <FAB
        small
        visible={FABVisible}
        style={styles.fab}
        icon="arrow-down"
        onPress={scrollToEnd}
      />
      <ScrollView onScroll={(e) => {
          let paddingToBottom = 10;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
            // setFABVisible(false);
          } else {
            // setFABVisible(true);
          }
        }}
        ref={ref => scrollViewRef = ref}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={{
          flex: 1,
          flexDirection: "column",
          padding: 14
        }}>
          {messages.map((msg, i) => <ChatMessage {...msg} key={i} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}