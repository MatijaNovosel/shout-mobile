import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ChatMessage } from "./components/Chat/ChatMessage";
import { ChatMessage as ChatMessageModel } from "./models/chat";
import { randInt, range } from "./utils/helpers";

export const ChatDetails = () => {
  const messages: ChatMessageModel[] = range(0, 15, 1).map((n) => ({
    content: `Message ${n}`,
    sentAt: new Date(),
    userId: randInt(0, 2)
  }));

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{
          flex: 1,
          flexDirection: "column",
        }}>
          {messages.map((msg, i) => <ChatMessage {...msg} key={i} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}