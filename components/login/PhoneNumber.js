import {View, StyleSheet} from 'react-native';
import React, {useState, useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumber = () => {
  const phoneInput = useRef(<PhoneInput></PhoneInput>);
  const [formattedValue, setFormattedValue] = useState('');
  const [value, setValue] = useState('');
  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        placeholder="Mobile number"
        defaultCode="AE"
        autoFocus={false}
        // onChangeText={text => {
        //   setValue(text);
        // }}
        // onChangeFormattedText={text => {
        //   setFormattedValue(text);
        // }}
        containerStyle={styles.number}
        countryPickerButtonStyle={styles.country}
        codeTextStyle={styles.input}
        textContainerStyle={styles.picker}
        textInputStyle={styles.numText}
        autoFocus
      />
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  number: {
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#e5e4e2',
    height: 50,
    width: '70%',
  },
  country: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderWidth: 0.5,
    borderColor: '#e5e4e2',
  },
  input: {
    marginTop: -5,
    fontSize: 14,
    color: 'grey',
  },
  picker: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 0.5,
    borderColor: '#e5e4e2',
    backgroundColor: 'white',
  },
  numText: {
    margin: -9,
    fontSize: 14,
    color: 'grey',
  },
});
