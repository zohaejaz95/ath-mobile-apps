import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import BackNav from '../BackNav';
import styles1 from '../styles/styles';

const Reservation = props => {
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
  const createButtonAlert = () =>
    Alert.alert('Request Received', 'You will be updated shortly.', [
      {text: 'OK', onPress: () => props.navigation.navigate('Landing')},
    ]);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BackNav
        navigation={props.navigation}
        login={true}
        innerText="Reservation"
      />
      <View style={styles.main}>
        <Text style={styles.heading}>Your Personal Details</Text>
        <Text>Name</Text>
        <TextInput style={styles.outline} />
        <Text>Email</Text>
        <TextInput style={styles.outline} />
        <Text>Phone</Text>
        <TextInput style={styles.outline} />
        <Text>Select Date</Text>
        <TouchableOpacity
          style={styles.outline}
          onPress={() => showMode('date')}>
          <Text></Text>
        </TouchableOpacity>
        <Text>Select Time</Text>
        <TouchableOpacity
          style={styles.outline}
          onPress={() => showMode('time')}>
          <Text></Text>
        </TouchableOpacity>
        <Text>Seats Reserved</Text>
        <TextInput style={styles.outline} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={createButtonAlert}>
          <Text style={styles1.continue}>SEND</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
//name email phone date select time slot send
export default Reservation;

const styles = StyleSheet.create({
  main: {
    margin: 20,
  },
  button: {
    marginTop: 25,
    marginBottom: 10,
    width: '90%',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#742013',
  },
  heading: {
    color: '#742013',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
  },
  outline: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 25,
    paddingLeft: 15,
    height: 40,
  },
});
