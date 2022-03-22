import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import BackNav from '../BackNav';

const Payment = props => {
  const [cash, setCash] = useState(false);
  const [card, setCard] = useState(false);
  const [points, setPoints] = useState(false);
  const [pay, setPay] = useState(false);
  const [order, setOrder] = useState('');
  const [orderData, setOrderData] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [paymentData, setPaymentData] = useState('');
  const {customer, branch, items, instructions, total, delivery, totalPoints} =
    props.route.params;
  const url =
    Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
  // const paymentByCard= () => {

  // }

  const deleteCart = async () => {
    try {
      //const jsonValue = JSON.stringify(value);
      await AsyncStorage.removeItem('cart');
      //setIsOrder(false);
    } catch (e) {
      // saving error
    }
  };
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
  const placeOrder = () => {
    let orderId;
    let orderD, itemD;
    let order1 = {
      type: branch.type,
      date: Date(),
      branch: branch.branchId,
      customer: customer.id,
      location: 'heres location',
      instructions: instructions,
      status: 'active',
    };
    console.log(order1);
    fetch(`${url}/add/order/customer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order1),
    })
      .then(async resp => {
        try {
          const jsonResp = await resp.json();
          if (resp.status !== 200) {
            //console.log(jsonResp);
            console.log('order created error');
            Alert.alert('Error', 'Unable to perform action', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ]);
          } else {
            console.log(jsonResp);
            console.log('order created');
            setOrder(jsonResp.id);
            orderId = jsonResp.id;
            orderD = jsonResp;
            setOrderData(jsonResp);
            // items to be added in the cart
            let cart;
            const promise = items.map((i, j) => {
              cart = {
                order: jsonResp.id,
                customer: customer.id,
                item: {
                  id: i.id,
                  quantity: i.quantity,
                  size: i.size,
                },
              };
              fetch(`${url}/add/cart`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  //Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(cart),
              })
                .then(async res => {
                  try {
                    const jsonRes = await res.json();
                    if (res.status !== 200) {
                      //console.log(jsonResp);
                      console.log('Order could not be placed!');
                      Alert.alert('Error', 'Order could not be placed!', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {
                          text: 'OK',
                          onPress: () => console.log('OK Pressed'),
                        },
                      ]);
                    } else {
                      itemD = jsonRes;
                      console.log(jsonRes);
                      setItemsData(jsonRes);
                      console.log('items added');
                    }
                  } catch (err) {
                    console.log(err);
                    console.log('items not added! error');
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            });
            //items added in the cart
            //after completion payment added
            setTimeout(() => {
              Promise.all(promise).then(function () {
                let paymentData = {
                  order: orderId,
                  totalBill: total,
                  redeem: 0,
                  offer: 0,
                  totalPoints: totalPoints,
                  method: pay,
                  status: false,
                  deliveryFee: delivery,
                  netAmount: total + delivery,
                };
                fetch(`${url}/add/payment`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(paymentData),
                })
                  .then(async resp => {
                    try {
                      const jsonResp = await resp.json();
                      if (resp.status !== 200) {
                        //console.log(jsonResp);
                        console.log('Order could not be placed!');
                        Alert.alert('Error', 'Order could not be placed!', [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                          },
                        ]);
                      } else {
                        console.log(jsonResp);
                        setPaymentData(jsonResp);
                        deleteCart();
                        console.log('payment');
                        if (pay === 'card') {
                          props.navigation.navigate('Main', {
                            paymentId: jsonResp.id,
                            amount: jsonResp.netAmount,
                          });
                        } else {
                          props.navigation.navigate('OrderDetails', {
                            order: orderD,
                            payment: jsonResp,
                            items: itemD,
                          });
                        }
                      }
                    } catch (err) {
                      console.log(err);
                      console.log('order error');
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              });
            }, 1500);
          }
        } catch (err) {
          console.log(err);
          console.log('order error');
        }
      })
      .catch(err => {
        console.log(err);
      });
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
      <TouchableOpacity style={styles.button} onPress={() => placeOrder()}>
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
