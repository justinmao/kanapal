import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import Dimensions from 'Dimensions';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc';

import Kana from '../libraries/Kana';
import Global from '../libraries/Global';

class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      h: true,
      h_k: true,
      h_s: true,
      h_t: true,
      h_n: true,
      h_h: true,
      h_m: true,
      h_y: true,
      h_r: true,
      h_w: true,
      h_nn: true,
      h_g: false,
      h_z: false,
      h_d: false,
      h_b: false,
      h_p: false,
      k: false,
      k_k: false,
      k_s: false,
      k_t: false,
      k_n: false,
      k_h: false,
      k_m: false,
      k_y: false,
      k_r: false,
      k_w: false,
      k_nn: false,
      k_g: false,
      k_z: false,
      k_d: false,
      k_b: false,
      k_p: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.kanaSet}>
          <Text>hiragana</Text>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h')}><View style={this.state.h ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>a</Text><Text>あ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>i</Text><Text>い</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>u</Text><Text>う</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>e</Text><Text>え</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>o</Text><Text>お</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_k')}><View style={this.state.h_k ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ka</Text><Text>か</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ki</Text><Text>き</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ku</Text><Text>く</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ke</Text><Text>け</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ko</Text><Text>こ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_s')}><View style={this.state.h_s ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>sa</Text><Text>さ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>shi</Text><Text>し</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>su</Text><Text>す</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>se</Text><Text>せ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>so</Text><Text>そ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_t')}><View style={this.state.h_t ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ta</Text><Text>た</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>chi</Text><Text>ち</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>tsu</Text><Text>つ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>te</Text><Text>て</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>to</Text><Text>と</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_n')}><View style={this.state.h_n ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>na</Text><Text>な</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ni</Text><Text>に</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>nu</Text><Text>ぬ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ne</Text><Text>ね</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>no</Text><Text>の</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_h')}><View style={this.state.h_h ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ha</Text><Text>は</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>hi</Text><Text>ひ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>fu</Text><Text>ふ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>he</Text><Text>へ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ho</Text><Text>ほ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_m')}><View style={this.state.h_m ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ma</Text><Text>ま</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mi</Text><Text>み</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mu</Text><Text>む</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>me</Text><Text>め</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mo</Text><Text>も</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_y')}><View style={this.state.h_y ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ya</Text><Text>や</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>yu</Text><Text>ゆ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>yo</Text><Text>よ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_r')}><View style={this.state.h_r ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ra</Text><Text>ら</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ri</Text><Text>り</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ru</Text><Text>る</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>re</Text><Text>れ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ro</Text><Text>ろ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_w')}><View style={this.state.h_w ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>wa</Text><Text>わ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>wo</Text><Text>を</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_nn')}><View style={this.state.h_nn ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>n</Text><Text>ん</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_g')}><View style={this.state.h_g ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ga</Text><Text>が</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>gi</Text><Text>ぎ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>gu</Text><Text>ぐ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ge</Text><Text>げ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>go</Text><Text>ご</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_z')}><View style={this.state.h_z ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>za</Text><Text>ざ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ji</Text><Text>じ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>zu</Text><Text>ず</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ze</Text><Text>ぜ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>zo</Text><Text>ぞ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_d')}><View style={this.state.h_d ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>da</Text><Text>だ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ji</Text><Text>ぢ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>du</Text><Text>づ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>de</Text><Text>で</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>do</Text><Text>ど</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_b')}><View style={this.state.h_b ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ba</Text><Text>ば</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bi</Text><Text>び</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bu</Text><Text>ぶ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>be</Text><Text>べ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bo</Text><Text>ぼ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('h_p')}><View style={this.state.h_p ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>pa</Text><Text>ぱ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pi</Text><Text>ぴ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pu</Text><Text>ぷ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pe</Text><Text>ぺ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>po</Text><Text>ぽ</Text></View>
          </View></TouchableWithoutFeedback>
        </View>

        <View style={styles.kanaSet}>
          <Text>katakana</Text>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k')}><View style={this.state.k ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>a</Text><Text>ア</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>i</Text><Text>イ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>u</Text><Text>ウ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>e</Text><Text>エ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>o</Text><Text>オ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_k')}><View style={this.state.k_k ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ka</Text><Text>カ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ki</Text><Text>キ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ku</Text><Text>ク</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ke</Text><Text>ケ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ko</Text><Text>コ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_s')}><View style={this.state.k_s ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>sa</Text><Text>サ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>shi</Text><Text>シ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>su</Text><Text>ス</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>se</Text><Text>セ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>so</Text><Text>ソ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_t')}><View style={this.state.k_t ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ta</Text><Text>タ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>chi</Text><Text>チ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>tsu</Text><Text>ツ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>te</Text><Text>テ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>to</Text><Text>ト</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_n')}><View style={this.state.k_n ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>na</Text><Text>ナ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ni</Text><Text>ニ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>nu</Text><Text>ヌ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ne</Text><Text>ネ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>no</Text><Text>ノ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_h')}><View style={this.state.k_h ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ha</Text><Text>ハ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>hi</Text><Text>ヒ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>fu</Text><Text>フ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>he</Text><Text>ヘ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ho</Text><Text>ホ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_m')}><View style={this.state.k_m ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ma</Text><Text>マ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mi</Text><Text>ミ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mu</Text><Text>ム</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>me</Text><Text>メ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>mo</Text><Text>モ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_y')}><View style={this.state.k_y ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ya</Text><Text>ヤ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>yu</Text><Text>ユ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>yo</Text><Text>ヨ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_r')}><View style={this.state.k_r ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ra</Text><Text>ラ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ri</Text><Text>リ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ru</Text><Text>ル</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>re</Text><Text>レ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ro</Text><Text>ロ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_w')}><View style={this.state.k_w ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>wa</Text><Text>ワ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>wo</Text><Text>ヲ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_nn')}><View style={this.state.k_nn ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>n</Text><Text>ン</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
            <View style={styles.kana}><Text style={styles.romanji}></Text><Text></Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_g')}><View style={this.state.k_g ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ga</Text><Text>ガ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>gi</Text><Text>ギ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>gu</Text><Text>グ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ge</Text><Text>ゲ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>go</Text><Text>ゴ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_z')}><View style={this.state.k_z ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>za</Text><Text>ザ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ji</Text><Text>ジ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>zu</Text><Text>ズ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ze</Text><Text>ゼ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>zo</Text><Text>ゾ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_d')}><View style={this.state.k_d ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>da</Text><Text>ダ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>ji</Text><Text>ヂ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>du</Text><Text>ヅ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>de</Text><Text>デ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>do</Text><Text>ド</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_b')}><View style={this.state.k_b ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>ba</Text><Text>バ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bi</Text><Text>ビ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bu</Text><Text>ブ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>be</Text><Text>ベ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>bo</Text><Text>ボ</Text></View>
          </View></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this._toggleRow('k_p')}><View style={this.state.k_p ? styles.kanaRowSelected : styles.kanaRowDeselected}>
            <View style={styles.kana}><Text style={styles.romanji}>pa</Text><Text>パ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pi</Text><Text>ピ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pu</Text><Text>プ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>pe</Text><Text>ペ</Text></View>
            <View style={styles.kana}><Text style={styles.romanji}>po</Text><Text>ポ</Text></View>
          </View></TouchableWithoutFeedback>
        </View>
      </View>
    )
  }

  _toggleRow(rowId) {
    if (rowId == 'h') {
      touchedKanas = ['h_a', 'h_i', 'h_u', 'h_e', 'h_o'];
    } else if (rowId == 'h_k') {
      touchedKanas = ['h_ka', 'h_ki', 'h_ku', 'h_ke', 'h_ko'];
    } else if (rowId == 'h_s') {
      touchedKanas = ['h_sa', 'h_shi', 'h_su', 'h_se', 'h_so'];
    } else if (rowId == 'h_t') {
      touchedKanas = ['h_ta', 'h_chi', 'h_tsu', 'h_te', 'h_to'];
    } else if (rowId == 'h_n') {
      touchedKanas = ['h_na', 'h_ni', 'h_nu', 'h_ne', 'h_no'];
    } else if (rowId == 'h_h') {
      touchedKanas = ['h_ha', 'h_hi', 'h_hu', 'h_he', 'h_ho'];
    } else if (rowId == 'h_m') {
      touchedKanas = ['h_ma', 'h_mi', 'h_mu', 'h_me', 'h_mo'];
    } else if (rowId == 'h_y') {
      touchedKanas = ['h_ya',　'h_yu', 'h_yo'];
    } else if (rowId == 'h_r') {
      touchedKanas = ['h_ra', 'h_ri', 'h_ru', 'h_re', 'h_ro'];
    } else if (rowId == 'h_w') {
      touchedKanas = ['h_wa', 'h_wo'];
    } else if (rowId == 'h_nn') {
      touchedKanas = ['h_n'];
    } else if (rowId == 'h_g') {
      touchedKanas = ['h_ga', 'h_gi', 'h_gu', 'h_ge', 'h_go'];
    } else if (rowId == 'h_z') {
      touchedKanas = ['h_za', 'h_ji', 'h_zu', 'h_ze', 'h_zo'];
    } else if (rowId == 'h_d') {
      touchedKanas = ['h_da', 'h_di', 'h_du', 'h_de', 'h_do'];
    } else if (rowId == 'h_b') {
      touchedKanas = ['h_ba', 'h_bi', 'h_bu', 'h_be', 'h_bo'];
    } else if (rowId == 'h_p') {
      touchedKanas = ['h_pa', 'h_pi', 'h_pu', 'h_pe', 'h_po'];
    } else if (rowId == 'k') {
      touchedKanas = ['k_a', 'k_i', 'k_u', 'k_e', 'k_o'];
    } else if (rowId == 'k_k') {
      touchedKanas = ['k_ka', 'k_ki', 'k_ku', 'k_ke', 'k_ko'];
    } else if (rowId == 'k_s') {
      touchedKanas = ['k_sa', 'k_shi', 'k_su', 'k_se', 'k_so'];
    } else if (rowId == 'k_t') {
      touchedKanas = ['k_ta', 'k_chi', 'k_tsu', 'k_te', 'k_to'];
    } else if (rowId == 'k_n') {
      touchedKanas = ['k_na', 'k_ni', 'k_nu', 'k_ne', 'k_no'];
    } else if (rowId == 'k_h') {
      touchedKanas = ['k_ha', 'k_hi', 'k_hu', 'k_he', 'k_ho'];
    } else if (rowId == 'k_m') {
      touchedKanas = ['k_ma', 'k_mi', 'k_mu', 'k_me', 'k_mo'];
    } else if (rowId == 'k_y') {
      touchedKanas = ['k_ya',　'k_yu', 'k_yo'];
    } else if (rowId == 'k_r') {
      touchedKanas = ['k_ra', 'k_ri', 'k_ru', 'k_re', 'k_ro'];
    } else if (rowId == 'k_w') {
      touchedKanas = ['k_wa', 'k_wo'];
    } else if (rowId == 'k_nn') {
      touchedKanas = ['k_n'];
    } else if (rowId == 'k_g') {
      touchedKanas = ['k_ga', 'k_gi', 'k_gu', 'k_ge', 'k_go'];
    } else if (rowId == 'k_z') {
      touchedKanas = ['k_za', 'k_ji', 'k_zu', 'k_ze', 'k_zo'];
    } else if (rowId == 'k_d') {
      touchedKanas = ['k_da', 'k_di', 'k_du', 'k_de', 'k_do'];
    } else if (rowId == 'k_b') {
      touchedKanas = ['k_ba', 'k_bi', 'k_bu', 'k_be', 'k_bo'];
    } else if (rowId == 'k_p') {
      touchedKanas = ['k_pa', 'k_pi', 'k_pu', 'k_pe', 'k_po'];
    }
    if (this.state[rowId]) {
      for (i = 0; i < touchedKanas.length; ++i) {
        Global.currentKanaList.splice(Global.currentKanaList.indexOf(Kana[touchedKanas[i]]), 1);
      }
      this.setState({[rowId]: false});
    } else {
      for (i = 0; i < touchedKanas.length; ++i) {
        Global.currentKanaList = Global.currentKanaList.concat(Kana[touchedKanas[i]]);
      }
      this.setState({[rowId]: true});
    }
    Global.displayShouldReload = true;
  }

}

export default withNavigationFocus(SettingsScreen, 'Settings');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kanaSet: {
    margin: Dimensions.get('window').width / 53.5
  },
  kanaRowSelected: {
    flexDirection: 'row'
  },
  kanaRowDeselected: {
    opacity: 0.3,
    flexDirection: 'row'
  },
  kana: {
    height: Math.floor(Dimensions.get('window').width / 12),
    width: Math.floor(Dimensions.get('window').width / 12),
    borderWidth: 0.5,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  romanji: {
    fontSize: 10,
    marginTop: -3
  }
});
