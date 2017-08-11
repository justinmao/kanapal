import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Dimensions from 'Dimensions';

class TabBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => this.props.navigation.navigate('Study')}>
          <Text>STUDY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => this.props.navigation.navigate('Settings')}>
          <Text>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    marginTop: 24,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabBar;
