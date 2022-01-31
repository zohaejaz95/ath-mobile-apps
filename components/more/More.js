import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Navigations from '../Navigations';

const More = props => {
  const displayList = [
    {text: 'My Profile', nav: 'ViewProfile'},
    {text: 'My Orders', nav: 'Orders'},
    {text: 'Favourites', nav: ''},
    {text: 'My Offers', nav: ''},
    {text: 'News', nav: ''},
    {text: 'About Us', nav: ''},
    {text: 'Contact Us', nav: ''},
    {text: 'FAQ', nav: ''},
    {text: 'Terms & Conditions', nav: ''},
    {text: 'Ver 1.0.0', nav: ''},
  ];
  function navigatePages(nav, name) {
    nav.navigate(name);
  }
  return (
    <View style={styles.box}>
      {displayList.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.items}
          onPress={() => navigatePages(props.navigation, item.nav)}>
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <Navigations navigation={props.navigation} />
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
  },
  items: {
    width: '100%',
    height: 50,
    borderColor: 'lightgrey',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  logoutBtn: {
    marginTop: 50,
    width: '30%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logout: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  nav: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
