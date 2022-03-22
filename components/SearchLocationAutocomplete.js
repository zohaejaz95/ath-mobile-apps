/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Platform = {React};

function SearchLocationAutocomplete({navigation}) {
  const [country, setCountry] = useState('uae');

  useEffect(async () => {
    var cntry = JSON.parse(await AsyncStorage.getItem('country'));

    if (cntry.name_en == 'UAE') {
      setCountry('ae');
    } else if (cntry.name_en == 'KSA') {
      setCountry('sa');
    } else if (cntry.name_en == 'Egypt') {
      setCountry('eg');
    }
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={require('../asset/logo.png')} style={styles.logo} />
          <EntypoIcon
            name={'cross'}
            size={26}
            color="#414350"
            onPress={() => navigation.goBack()}
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          placeholderTextColor="gray"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // alert(JSON.stringify(data));
            Geocoder.init('AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4');
            Geocoder.from(data.description)
              .then(json => {
                var location = json.results[0].geometry.location;
                location.location = data.description;
                AsyncStorage.setItem('location', JSON.stringify(location));
                navigation.pop(1);
              })
              .catch(error => console.warn(error));
            // navigation.pop(1);
          }}
          query={{
            key: 'AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4',
            language: 'en',
            components: 'country:' + country,
          }}
        />
        {/* <GooglePlacesAutocomplete
           apiKey="AIzaSyApPL9uU36FgXnDolMVaIQzt5JctJmj6bE"
         /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    paddingTop: 0,
    backgroundColor: '#fafafa',
    height: '100%',
  },
  logoView: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: 160,
    height: 110,
    resizeMode: 'contain',
  },
  forgotHeading: {
    color: '#414350',
    fontWeight: 'bold',
    fontSize: Platform.ios == 'ios' ? 21 : 22,
  },
  text: {
    marginTop: 30,
    color: '#3a3d4c',
    fontSize: Platform.OS == 'ios' ? 13 : 14,
  },
  currentPasswordLabel: {
    marginTop: 35,
    color: '#b0b1b6',
    fontSize: 13,
  },
  passwordLabel: {
    marginTop: 35,
    color: '#b0b1b6',
    fontSize: 13,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#dddce4',
    color: '#adadad',
    marginTop: Platform.OS == 'ios' ? 10 : 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 13,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 10,
    paddingTop: 0,
  },
  signinBtn: {
    marginTop: 30,
    backgroundColor: '#C78E2B',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS == 'ios' ? 43 : 50,
    borderRadius: 3,
  },
  signinText: {
    color: 'white',
    fontSize: Platform.OS == 'ios' ? 13 : 14,
    fontWeight: 'bold',
  },
  noAccountText: {
    fontSize: Platform.ios == 'ios' ? 13 : 14,
    marginTop: 30,
    color: '#8b8e93',
  },
  signupLink: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SearchLocationAutocomplete;
