import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Stores = props => {
  const {branch} = props;
  return (
    <View style={styles.stores}>
      <Image source={{uri: branch.image}} style={styles.images} />
      <View style={styles.infoBox}>
        <Text style={styles.storeName}>{branch.name.toUpperCase()}</Text>
        <Text style={styles.floor}>{branch.floor.toUpperCase()}</Text>
        <Text style={styles.distance}>{branch.distance}</Text>
      </View>
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({
  stores: {
    padding: 10,
    flexDirection: 'row',
    height: 95,
    marginBottom: 10,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#e5e4e2',
  },
  images: {
    width: 70,
    height: 70,
  },
  infoBox: {
    marginLeft: 15,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#742013',
  },
  floor: {
    fontSize: 12,
    marginBottom: 7,
    color: 'black',
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
