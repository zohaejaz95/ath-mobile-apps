import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Header(props) {
  const {navigation} = props;
  return (
    <ImageBackground
      source={require('../asset/Layer_2.png')}
      resizeMode="cover">
      <View style={headerStyles.header}>
        {isLoggedIn(props.login, navigation)}
        <View style={headerStyles.heading}>
          <Text style={headerStyles.text}>Experience Emirati Hospitality</Text>
        </View>
        <View style={headerStyles.logo}>
          <Image
            source={require('../asset/logo.png')}
            style={headerStyles.image}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

function isLoggedIn(showLoginBtn, navigation) {
  if (showLoginBtn) {
    return (
      <View style={headerStyles.loginBtnBox}>
        <TouchableOpacity
          style={headerStyles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={headerStyles.continue}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={headerStyles.navToggle}>
        <Image
          source={require('../asset/hamburger.png')}
          style={{width: 25, height: 20}}
        />
      </View>
    );
  }
}

function loginScreen() {}

const headerStyles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
  },
  logo: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navToggle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#742013',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loginBtn: {
    margin: 10,
    width: 65,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D22B2B',
    flexDirection: 'row',
  },
  continue: {
    color: 'white',
    fontSize: 12,
  },
  loginBtnBox: {
    width: 75,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
