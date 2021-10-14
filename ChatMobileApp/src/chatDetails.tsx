import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput } from "react-native";
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
    bottom: 60,
    backgroundColor: "#1F2C34",
    zIndex: 100
  }
});

export const ChatDetails = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [msgText, setMsgText] = React.useState<string>("");
  const [messages, setMessages] = React.useState<ChatMessageModel[]>([]);
  const [FABVisible, setFABVisible] = useState<boolean>(true);

  const scrollToEnd = () => {
    if (scrollViewRef) {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }
  }

  const generateMessages = () => {
    setMessages(range(0, 15, 1).map(() => ({
      content: loremIpsum.substring(0, randInt(20, 200)),
      sentAt: new Date(),
      userId: randInt(0, 2)
    })));
  }

  useEffect(() => {
    generateMessages();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FAB
        small
        visible={FABVisible}
        style={styles.fab}
        icon="arrow-down"
        onPress={scrollToEnd}
      />
      <View style={{ flex: 5 }}>
        <ScrollView contentContainerStyle={{ padding: 14 }} onScroll={(e) => {
            let paddingToBottom = 10;
            paddingToBottom += e.nativeEvent.layoutMeasurement.height;
            if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
              setFABVisible(false);
            } else {
              setFABVisible(true);
            }
          }}
          ref={scrollViewRef}
        >
          {messages.map((msg, i) => <ChatMessage {...msg} key={i} />)}
        </ScrollView>
      </View>
      <View style={{ flex: 0.5 }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <TextInput
            placeholder="Message"
            placeholderTextColor="#8596A0"
            value={msgText}
            style={{
              backgroundColor: "#1F2C34",
              margin: 15,
              height: 40,
              flex: 1,
              borderRadius: 20,
              paddingHorizontal: 20 
            }}
            underlineColorAndroid="transparent"
            onChangeText={text => setMsgText(text)}
          />
          <FAB
            small
            color="white"
            icon="microphone"
            style={{
              marginRight: 15,
              backgroundColor: "#008c71"
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}