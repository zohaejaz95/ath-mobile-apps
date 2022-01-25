import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Items = props => {
  const {items} = props;
  return (
    <View style={styles.stores}>
      <Image source={{uri: items.image}} style={styles.images} />
      <View style={styles.infoBox}>
        <Text style={styles.productName}>{items.name}</Text>
        <Text style={styles.price}>{items.price}</Text>
        <Text style={styles.points}>You will get {items.points} points.</Text>
      </View>
      <View style={styles.cart}>
        <TouchableOpacity style={styles.iconStyle}>
          <Icon color={'#742013'} name="add" size={20} />
        </TouchableOpacity>
        <Text style={styles.cust}>Customizable</Text>
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  cart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cust: {
    marginTop: 2,
    fontSize: 10,
  },
  points: {
    fontSize: 10,
    color: '#4CBB17',
  },
  iconStyle: {
    borderRadius: 8,
    borderColor: '#742013',
    height: 35,
    width: 35,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stores: {
    padding: 15,
    flexDirection: 'row',
    height: 95,
    marginBottom: 10,
    borderRadius: 8,
  },
  images: {
    width: 70,
    height: 70,
  },
  infoBox: {
    marginLeft: 15,
    width: '55%',
  },
  productName: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
  price: {
    fontSize: 10,
    marginTop: 7,
    marginBottom: 7,
    color: 'black',
    fontWeight: '500',
  },
  distance: {
    margin: 2,
    width: 55,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#e5e4e2',
    textAlign: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
