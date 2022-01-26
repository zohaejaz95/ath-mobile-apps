import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

const boxHeight = 40;
export class Rewards extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://images.pexels.com/photos/10803604/pexels-photo-10803604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}>
        <View style={styles.navToggle}>
          <Icon size={25} style={styles.imageBars} name="bars" />
        </View>
        <View style={{flex: 1}} />
        <View style={styles.giftOp}>
          <View style={styles.giftBox}>
            <Text style={styles.giftText}>
              You have <Text style={styles.giftPrice}>0.00 AED</Text> valid
              until
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.giftOptions}>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>How It Works</Text>
            </View>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>My Rewards</Text>
            </View>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>Refer a Friend</Text>
            </View>
          </View>
          <View style={styles.giftOptions}>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>Transfer Credit</Text>
            </View>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>Credits Calculator</Text>
            </View>
            <View style={styles.optionBox}>
              <Text style={styles.giftText}>History</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Rewards;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  navToggle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBars: {
    width: 40,
    height: 35,
    color: 'white',
  },
  giftBox: {
    width: '85%',
    height: boxHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'silver',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    ///opacity: 1,
  },
  giftOp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  giftText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  giftPrice: {
    color: '#ddc16d',
    fontSize: 12,
  },
  giftOptions: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  optionBox: {
    width: '27%',
    height: boxHeight,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
