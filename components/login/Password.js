import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from '../styles/styles';
import BackNav from '../BackNav';

const Password = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BackNav login={true} navigation={props.navigation} innerText="Login" />
      <View style={pswdStyles.pswdText}>
        <Text style={styles.pswdText}>Enter your password</Text>
        <Text style={styles.text}>Please enter your 4-digit password</Text>
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
        <TouchableOpacity onPress={() => props.navigation.navigate('Forget')}>
          <Text style={pswdStyles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.continue}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// Confirm button on press to be updated
export default Password;

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
