import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackNav from '../BackNav';
import Ratings from './Ratings';
import detailStyles from '../styles/detailStyles';

const OrderDetails = props => {
  return (
    <View style={styles.box}>
      <BackNav
        navigation={props.navigation}
        login={true}
        innerText="Order Details"
      />
      <View style={styles.detailBox}>
        <View style={styles.boxesRow}>
          <View style={styles.mainRow}>
            <Icon name="delivery-dining" size={20} />
            <View style={{width: '100%'}}>
              <Text style={detailStyles.delivery}>Delivery</Text>
              <View style={styles.rows}>
                <Text style={detailStyles.date}>Date</Text>
                <Text style={detailStyles.orderNum}>Order Number</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxesRow}>
          <View style={styles.rows}>
            <Text style={detailStyles.bill}>Total Bill Value</Text>
            <Text style={detailStyles.bill}>AED 00.00</Text>
          </View>
        </View>

        <View style={styles.boxesRow} height={60}>
          <View style={styles.rows}>
            <Text style={detailStyles.headings}>Product Redeemed Value</Text>
            <Text style={detailStyles.prices}>AED 00.00</Text>
          </View>
          <View style={styles.rows}>
            <Text style={detailStyles.headings}>Offer Availed</Text>
            <Text style={detailStyles.prices}>AED 00.00</Text>
          </View>
        </View>

        <View style={styles.boxesRow} height={60}>
          <View style={styles.rows}>
            <Text style={detailStyles.headings}>Card Payment</Text>
            <Text style={detailStyles.prices}>AED 00.00</Text>
          </View>
          <View style={styles.rows}>
            <Text style={detailStyles.headings}>Points Worth Redeemed</Text>
            <Text style={detailStyles.prices}>AED 00.00</Text>
          </View>
        </View>
        <View style={styles.boxesRow}>
          <View style={styles.rows}>
            <Text style={detailStyles.net}>Net Amount Paid</Text>
            <Text style={detailStyles.net}>AED 00.00</Text>
          </View>
        </View>
        <View style={styles.boxesRow}>
          <View style={styles.order}>
            <Text style={detailStyles.delivery}>Order Type(Dine In)</Text>
            <Text style={detailStyles.headings}>Branch Name,</Text>
            <Text style={detailStyles.headings}>Floor</Text>
          </View>
        </View>
      </View>
      <View style={styles.feedback}>
        <Text style={detailStyles.feedback}>Feedback</Text>
        <Ratings />
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailBox: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-between',
    width: '90%',
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
  },
  rows: {
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxesRow: {
    paddingBottom: 12,
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  order: {
    marginLeft: 20,
  },
  feedback: {
    margin: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
