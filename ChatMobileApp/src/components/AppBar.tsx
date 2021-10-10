import { StackHeaderProps } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Avatar } from "react-native-paper"
import * as React from 'react';

const styles = StyleSheet.create({
  appBar: {
    elevation: 0,
    textAlign: 'left',
    color: "#8596A0",
    fontWeight: "bold",
    backgroundColor: "#1F2C34"
  }
});

export const CustomAppBar = ({ navigation, back, route }: StackHeaderProps) =>
  <Appbar.Header style={styles.appBar} >
    {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
    {route.name === "Home" ?
      <React.Fragment>
        <Appbar.Content title="(Not) WhatsApp" color="#8596A0" />
        <Appbar.Action icon="magnify" color="#8596A0" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" color="#8596A0" onPress={() => {}} />
      </React.Fragment> : null
    }
    {route.name === "ChatDetails" ?
      <React.Fragment>
        <View style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Avatar.Image
            size={38}
            source={require("../../assets/plenkovic.jpg")}
          />
          <Text style={{
            marginLeft: 10,
            color: "#E9EDF0",
            fontSize: 20
          }}>
            Andrej Plenković
          </Text>
        </View>
        <Appbar.Action icon="camera" color="white" onPress={() => {}} />
        <Appbar.Action icon="phone" color="white" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
      </React.Fragment> : null
    }
  </Appbar.Header>