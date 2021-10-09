import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import * as React from 'react';
import { RootNavigator } from './src/rootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00A884"
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider theme={theme}>
          <RootNavigator />
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
