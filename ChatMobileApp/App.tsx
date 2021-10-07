import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors
} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  sectionTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "600",
    marginVertical: 20
  }
});

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#292e29" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? "#292e29" : Colors.white
          }}
        >
          <Text style={styles.sectionTitle}>
            Chat app testing
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
