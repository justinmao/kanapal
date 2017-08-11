import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { updateFocus } from 'react-navigation-is-focused-hoc'
import Dimensions from 'Dimensions';
import Expo from 'expo';

import Screens from './src/screens'

import TabBar from './src/components/TabBar'

const Navigator = TabNavigator({
  Study: { screen: Screens.study },
  Settings: { screen: Screens.settings },
}, {
  tabBarOptions: {
  },
  tabBarPosition: 'top',
  tabBarComponent: TabBar,
  swipeEnabled: true
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: Expo.Constants.statusBarHeight}}>
        <Navigator onNavigationStateChange = {(prevState, currentState) => {updateFocus(currentState)}}/>
      </View>
    );
  }
}
