import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import {Rating} from 'react-native-ratings';

import BackNav from '../BackNav';
//import Ratings from './Ratings';

const Orders = props => {
  function ratingCompleted(rating) {
    console.log(rating);
  }
  return (
    <View style={styles.box}>
      <BackNav
        navigation={props.navigation}
        login={true}
        innerText="My Orders"
      />
      <View style={styles.searchInputBox}>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity style={styles.iconCircle}>
          <Icon name="search" size={15} color={'silver'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.ordersBox}
        onPress={() => props.navigation.navigate('OrderDetails')}>
        <Text style={styles.date}>Order Date</Text>
        <Text style={styles.type}>Order Type(DINE IN)</Text>
        {
          //Capital Letters .toUpperCase()
        }
        <Text style={styles.info}>Order Number</Text>
        <Text style={styles.info}>AED </Text>
        <Text style={styles.info}>Txn ID: </Text>
        <Text style={styles.info}>Branch Name</Text>
        {/* <Rating
          type="custom"
          startingValue={0}
          ratingCount={5}
          ratingColor="grey"
          imageSize={25}
          ratingTextColor="grey"
          onFinishRating={ratingCompleted}
          style={{alignSelf: 'flex-start'}}
        /> */}
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={25} style={{marginRight: 2}} />
          <Icon name="star" size={25} style={{marginRight: 2}} />
          <Icon name="star" size={25} style={{marginRight: 2}} />
          <Icon name="star" size={25} style={{marginRight: 2}} />
          <Icon name="star" size={25} style={{marginRight: 2}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchInputBox: {
    width: '100%',
    height: 45,
    backgroundColor: '#e5e4e2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconCircle: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  searchInput: {
    width: '80%',
    height: 45,
    marginLeft: 5,
  },
  ordersBox: {
    margin: 15,
  },
  date: {
    height: 20,
    color: 'grey',
    fontSize: 12,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  type: {
    color: 'black',
    fontWeight: '500',
    marginBottom: 5,
  },
  info: {
    marginBottom: 5,
  },
});
