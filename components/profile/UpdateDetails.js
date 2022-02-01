import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import PhoneNumber from '../login/PhoneNumber';
import styles1 from '../styles/styles';

const UpdateDetails = () => {
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
    <View style={styles.box}>
      <Text style={styles.labels}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full Name"
        //keyboardType="str"
      />
      <Text style={styles.labels}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        //keyboardType="str"
      />
      <Text style={styles.labels}>Phone Number</Text>
      <PhoneNumber />
      <Text style={styles.labels}>Date of Birth</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.dateBox}
          //onChangeText={onChangePin1}
          //value={dateInput}
          placeholder="Select Date of Birth"
          keyboardType="numeric"
        />
        <TouchableOpacity title="DatePicker" onPress={() => showMode('date')}>
          <Icon style={styles.icon} name="date-range" size={20}></Icon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.password}>
        <Text style={styles.textPswd}>Change Password</Text>
        <Icon name="arrow-right" size={30} color={'#742013'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles1.button}>
        <Text style={styles1.continue}>SAVE</Text>
      </TouchableOpacity>
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

export default UpdateDetails;

const styles = StyleSheet.create({
  box: {
    marginLeft: '7%',
    marginRight: '7%',
    width: '100%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    width: '86%',
    borderRadius: 25,
    height: 42,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dateBox: {
    width: '90%',
  },
  input: {
    width: '86%',
    borderRadius: 25,
    height: 40,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    paddingLeft: 15,
  },
  labels: {
    marginTop: 15,
    marginBottom: 5,
    //textAlign: 'left',
  },
  password: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPswd: {
    color: '#742013',
    fontSize: 16,
  },
});
