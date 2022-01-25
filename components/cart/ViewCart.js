import {View, Text} from 'react-native';
import React from 'react';

const ViewCart = props => {
  //all cart items are taken as input in props.
  //total items and amount is calculated in a function
  //here in this class.
  return (
    <View>
      <View>
        <Text>0 Items Selected</Text>
        <Text>AED 00.00</Text>
      </View>
      <Text> View Cart</Text>
    </View>
  );
};

export default ViewCart;
const styles = StyleSheet.create({});
