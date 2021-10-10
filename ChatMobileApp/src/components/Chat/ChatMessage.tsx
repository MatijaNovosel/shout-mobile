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
      backgroundColor: userId === 1 ? "#005D4B" : "#1F2C34",
      maxWidth: "90%",
      padding: 10,
      borderRadius: 12,
      marginBottom: 5,
      alignSelf: userId === 1 ? "flex-end" : "auto"
    }}>
      <Text style={{
        color: "white"
      }}>
        { content }
      </Text>
    </View>
  );
}