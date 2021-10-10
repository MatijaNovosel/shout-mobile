import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper";

interface Props {
  content: string;
  userId: number;
  sentAt: Date;
}

export const ChatMessage = ({ content, sentAt, userId }: Props) => {
  return (
    <View style={{
      backgroundColor: "#1F2C34",
      width: "50%",
      padding: 10,
      borderRadius: 6
    }}>
      <Text>
        { content }
      </Text>
    </View>
  );
}