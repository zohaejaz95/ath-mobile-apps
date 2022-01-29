import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackNav from '../BackNav';

const Orders = props => {
  return (
    <View>
      <BackNav
        navigation={props.navigation}
        login={true}
        innerText="Reservation"
      />
      <TouchableOpacity>
        <Icon name="search" size={20} />
      </TouchableOpacity>
      <View>
        <Text>Order Date</Text>
        <Text>Order Type(DINE IN)</Text>
        {
          //Capital Letters .toUpperCase()
        }
        <Text>Order Number</Text>
        <Text>AED </Text>
        <Text>Txn ID: </Text>
        <Text>Branch Name</Text>
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
