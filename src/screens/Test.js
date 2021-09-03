import React from 'react';
import {View, Text} from 'react-native';
import BottomDrawer from 'react-native-bottom-drawer-view';

export default class Test extends React.Component {
  renderContent = () => {
    return (
      <View>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
        <Text>Get directions to your location</Text>
      </View>
    );
  };

  render() {
    return (
      <BottomDrawer containerHeight={300}>{this.renderContent()}</BottomDrawer>
    );
  }
}
