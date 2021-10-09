import * as React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Calls } from './calls';
import { Camera } from './camera';
import { Chats } from './chats';
import { MaterialIcon } from './components/Icon';
import { Status } from './status';

const renderScene = SceneMap({
  chats: Chats,
  status: Status,
  calls: Calls,
  camera: Camera
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#00A884' }}
    style={{ backgroundColor: '#1F2C34' }}
    renderLabel={({ route, focused }) => (
      <View>
        {
          route.key === "camera" ?
            <MaterialIcon size="large" color="#8596A0" name="camera" /> :
            <Text style={{
              color: focused ? "#00A884" : "#84959F",
              fontWeight: "bold"
            }}>
              {route.key.toUpperCase()}
            </Text>}
      </View>
    )}
  />
);

export const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'camera', title: 'Camera' },
    { key: 'chats', title: 'Chats' },
    { key: 'status', title: 'Status' },
    { key: 'calls', title: 'Calls' }
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}