import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';

import BackNav from '../BackNav';
import styles from '../styles/styles';
export class Forget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BackNav
          login={true}
          navigation={this.props.navigation}
          innerText="Reset Password"
        />
        <View style={pswdStyles.pswdText}>
          <Text style={styles.pswdText}>Enter new password</Text>
          <Text style={styles.text}>Please enter your 4-digit password</Text>
          <Text style={styles.password}>New Password*</Text>
          <View style={pswdStyles.pin}>
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.password}>Confirm Password*</Text>
          <View style={pswdStyles.pin}>
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.pin}
              placeholder="*"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.continue}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Forget;

const pswdStyles = StyleSheet.create({
  pin: {
    flexDirection: 'row',
  },
  pswdText: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot: {
    color: 'grey',
    marginTop: 25,
  },
});
