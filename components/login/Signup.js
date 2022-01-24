import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import BackNav from '../BackNav';
import PhoneNumber from './PhoneNumber';
import styles from '../styles/styles';

const Signup = props => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BackNav login={true} navigation={props.navigation} innerText="Signup" />
      <View style={signupStyles.signupText}>
        <Text style={styles.pswdText}>Set Password</Text>
        <Text style={styles.text}>Secure your account with a new password</Text>
        <PhoneNumber />
        <View style={signupStyles.inputBox}>
          <TextInput
            style={signupStyles.dateBox}
            //onChangeText={onChangePin1}
            //value={dateInput}
            placeholder="Select Date of Birth"
            keyboardType="numeric"
          />
          <TouchableOpacity title="DatePicker" onPress={() => showMode('date')}>
            <Icon style={signupStyles.icon} name="date-range" size={20}></Icon>
          </TouchableOpacity>
        </View>

        {/* <Datepicker /> */}
        <Text style={styles.password}>New Password*</Text>
        <View style={signupStyles.pin}>
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
        <View style={signupStyles.pin}>
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
          onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.continue}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Signup;

const signupStyles = StyleSheet.create({
  pin: {
    flexDirection: 'row',
  },
  signupText: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#742013',
    paddingRight: 15,
  },
  dateBox: {
    width: '90%',
  },
  inputBox: {
    flexDirection: 'row',
    marginTop: 20,
    width: '85%',
    borderRadius: 25,
    height: 42,
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
