import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Dimensions from 'Dimensions';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc';

import Kana from '../libraries/Kana';
import Global from '../libraries/Global';

class StudyScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      currentInput: '',
      currentKana: this._randomKana(),
      showRomanji: false,
      failed: false
    }
  }

  componentWillUpdate() {
    if (Global.displayShouldReload) {
      this._skip();
      Global.displayShouldReload = false;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.kanjiDisplay}>
          <View style={this.state.showRomanji ? styles.romanjiBarShow : styles.romanjiBarHide}><Text>{this.state.currentKana.romanji}</Text></View>
          <Text style={{fontSize: 96}} onPress={() => this._showRomanji()}>
            {Global.currentKanaList.length > 0 ? this.state.currentKana.kana : ':('}
          </Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.inputBar}><Text style={this.state.failed ? {fontSize: 32, color: 'red'} : {fontSize: 32}}>{this.state.currentInput}</Text></View>
          <View style={styles.row1}>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('w')}><Text>W</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('e')}><Text>E</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('r')}><Text>R</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('t')}><Text>T</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('y')}><Text>Y</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('u')}><Text>U</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('i')}><Text>I</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('o')}><Text>O</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('p')}><Text>P</Text></TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('a')}><Text>A</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('s')}><Text>S</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('d')}><Text>D</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('f')}><Text>F</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('g')}><Text>G</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('h')}><Text>H</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('j')}><Text>J</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('k')}><Text>K</Text></TouchableOpacity>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('z')}><Text>Z</Text></TouchableOpacity>
            <View style={styles.keySpacer}><Text>X</Text></View>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('c')}><Text>C</Text></TouchableOpacity>
            <View style={styles.keySpacer}><Text>V</Text></View>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('b')}><Text>B</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('n')}><Text>N</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key} onPress={() => this._modifyInput('m')}><Text>M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.keyDelete} onPress={() => this._modifyInput('<')}><Text>&lt;</Text></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.keySkip} onPress={() => this._skip()}><Text>Skip</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

  _showRomanji() {
    this.setState({showRomanji: true});
  }

  _modifyInput(c) {
    if (Global.currentKanaList.length > 0) {
      if (c == '<') {
        this.setState({currentInput: this.state.currentInput.slice(0, -1), failed: false});
      } else if (!this.state.failed){
        newInput = this.state.currentInput + c;
        if (newInput == this.state.currentKana.romanji) {
          newKana = this._randomKana();
          this.setState({currentInput: '', currentKana: newKana, showRomanji: false, failed: false});
        } else if (newInput.length >= 3 || ['a', 'i', 'u', 'e', 'o'].indexOf(c) >= 0) {
          this.setState({currentInput: this.state.currentInput + c, failed: true});
        } else {
          this.setState({currentInput: this.state.currentInput + c});
        }
      }
    }
  }

  _skip() {
    if (Global.currentKanaList.length > 0) {
      newKana = this.state.currentKana;
      if (Global.currentKanaList.length == 1) {
        newKana = this._randomKana();
      } else {
        while (newKana == this.state.currentKana) {
          newKana = this._randomKana();
        }
      }
      this.setState({currentInput: '', currentKana: newKana, showRomanji: false, failed: false});
    }
  }

  _randomKana() {
    return Global.currentKanaList[Math.floor(Math.random() * Global.currentKanaList.length)];
  }

}

export default withNavigationFocus(StudyScreen, 'Study');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  kanjiDisplay: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  romanjiBarShow: {
    height: 24,
    marginBottom: 8,
    opacity: 0.65,
    justifyContent: 'center'
  },
  romanjiBarHide: {
    height: 24,
    marginBottom: 8,
    opacity: 0,
    justifyContent: 'center'
  },
  keyboard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBar: {
    height: 40,
    margin: 32,
    justifyContent: 'center'
  },
  row1: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: Math.floor(Dimensions.get('window').width / 20)
  },
  row2: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: Math.floor(Dimensions.get('window').width / 20)
  },
  row3: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: Math.floor(Dimensions.get('window').width / 11.5),
  },
  key: {
    height: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    width: Math.floor(Dimensions.get('window').width / 11.5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderWidth: 0.5
  },
  keySpacer: {
    height: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    width: Math.floor(Dimensions.get('window').width / 11.5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderWidth: 0.5,
    opacity: 0.2
  },
  keyDelete: {
    height: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    width: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderWidth: 0.5
  },
  keySkip: {
    height: Math.floor(Dimensions.get('window').width / 11.5 * 1.45),
    width: 160,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    borderWidth: 0.5
  }
});
