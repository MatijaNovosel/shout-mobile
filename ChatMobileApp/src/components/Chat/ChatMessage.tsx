import { format } from "date-fns";
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
      <Text style={{
        alignSelf: "flex-end",
        fontSize: 12,
        color: "#8596A0",
        marginTop: -10
      }}>
        {format(sentAt, "HH:mm")}
      </Text>
    </View>
  );
}