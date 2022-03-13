import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import BackNav from '../BackNav';

const Payment = props => {
  const [cash, setCash] = useState(false);
  const [card, setCard] = useState(false);
  const [points, setPoints] = useState(false);
  const [pay, setPay] = useState(false);
  const isCash = () => {
    setCash(true);
    setCard(false);
    setPoints(false);
    setPay('cash');
  };
  const isCard = () => {
    setCash(false);
    setCard(true);
    setPoints(false);
    setPay('card');
  };
  const isPoints = () => {
    setCash(false);
    setCard(false);
    setPoints(true);
    setPay('points');
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <BackNav login={true} navigation={props.navigation} innerText="Payment" />
      <View style={{margin: 20}}>
        <Text
          style={{
            color: '#742013',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Choose Payment Method
        </Text>
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity style={styles.outer} onPress={() => isCash()}>
            {cash ? <View style={styles.inner} /> : null}
          </TouchableOpacity>
          <Text> Cash</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity style={styles.outer} onPress={() => isCard()}>
            {card ? <View style={styles.inner} /> : null}
          </TouchableOpacity>
          <Text> Card</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity style={styles.outer} onPress={() => isPoints()}>
            {points ? <View style={styles.inner} /> : null}
          </TouchableOpacity>
          <Text> Points</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.locText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  outer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#742013',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  inner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#742013',
  },
  button: {
    marginTop: 25,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    width: '95%',
    borderRadius: 25,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#742013',
  },
  locText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'center',
  },
});
