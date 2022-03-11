import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Items = props => {
  const {items, branch} = props;
  //const {branch} = props;
  const [count, setCount] = useState(items.count);
  const [isOrder, setIsOrder] = useState(false);
  const [customer, setCustomer] = useState('');
  const [order, setOrder] = useState('');
  //const [token, setToken] = useState('');
  const token = 'AAAA-BBBB-CCCC-DDDD';

  const url =
    Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getData();
      getOrder();
      console.log('Focused');
      //console.log(AsyncStorage.getItem('customer'));

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Unfocused');
      };
    }, []),
  );
  const newOrder = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('order', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const deleteOrder = async () => {
    try {
      //const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('order', null);
      setIsOrder(false);
    } catch (e) {
      // saving error
    }
  };

  const addCart = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(items.id, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getCart = async () => {
    try {
      const value = await AsyncStorage.getItem(items.id);
      console.log(value);
      if (value !== null) {
        let data = JSON.parse(value);
        // value previously stored
      } else {
      }
    } catch (e) {
      //return false;
      // error reading value
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('customer');
      console.log(value);
      if (value !== null) {
        let data = JSON.parse(value);
        console.log(data);
        setCustomer(data.cust.id);
        //setToken(data.token);
        //return value;
        // value previously stored
      } else {
      }
    } catch (e) {
      //return false;
      // error reading value
    }
  };

  const getOrder = async () => {
    try {
      const value = await AsyncStorage.getItem('order');
      console.log(value);
      if (value !== null) {
        setIsOrder(true);
        let o = JSON.parse(value);
        setOrder(o.id);
        // value previously stored
      } else {
        setIsOrder(false);
      }
    } catch (e) {
      //return false;
      // error reading value
    }
  };

  function addCount() {
    deleteOrder();

    setTimeout(() => {
      getData();
    }, 1000);

    if (isOrder) {
      console.log('order created');
      //update cart item in db and async storage and count
    } else {
      console.log('creating order');
      //create order add item in cart with status cart
      let order1 = {
        type: 'Delivery',
        date: Date(),
        branch: branch,
        customer: customer,
        location: '',
        instructions: '',
        status: 'cart',
      };
      console.log(order1);
      fetch(`${url}/add/order/customer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order1),
      })
        .then(async resp => {
          try {
            const jsonResp = await resp.json();
            if (resp.status !== 200) {
              console.log(jsonResp);
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
              //newOrder(jsonResp);
              // console.log('order created');
              // let cart = {
              //   item: {
              //     id: items.id,
              //     quantity: 1,
              //     size: 'Standard',
              //   },
              //   customer: customer,
              //   order: jsonResp.id,
              // };

              // fetch(`${url}/add/cart`, {
              //   method: 'POST',
              //   headers: {
              //     'Content-Type': 'application/json',
              //     Authorization: `Bearer ${token}`,
              //   },
              //   body: JSON.stringify(cart),
              // })
              //   .then(async res => {
              //     try {
              //       const jsonRes = await res.json();
              //       if (res.status !== 200) {
              //         console.log(jsonRes);
              //         Alert.alert('Error', 'Unable to Add to Cart', [
              //           {
              //             text: 'Cancel',
              //             onPress: () => console.log('Cancel Pressed'),
              //             style: 'cancel',
              //           },
              //           {
              //             text: 'OK',
              //             onPress: () => console.log('OK Pressed'),
              //           },
              //         ]);
              //       } else {
              //         //newOrder(jsonRes);
              //         //addItem({count: 1, size: standard});
              //         setCount(count + 1);
              //         addCart(jsonRes.id);
              //         console.log(jsonRes);
              //       }
              //     } catch (err) {
              //       console.log(err);
              //     }
              //   })
              //   .catch(err => {
              //     console.log(err);
              //   });

              console.log(jsonResp);
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    // if(count === 0 ){

    // }
  }

  return (
    <View style={styles.stores}>
      <Image source={{uri: items.image}} style={styles.images} />
      <View style={styles.infoBox}>
        <Text style={styles.productName}>{items.name}</Text>
        {props.bundles ? (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.bundledText}>AED {items.price}</Text>
            <Text style={styles.bundledPrice}>AED {items.price}</Text>
          </View>
        ) : (
          <Text style={styles.price}>AED {items.price}</Text>
        )}
        <Text style={styles.points}>You will get {items.points} points.</Text>
      </View>
      <View style={styles.cart}>
        {count === 0 ? (
          <TouchableOpacity style={styles.iconStyle} onPress={() => addCount()}>
            <Icon color={'#742013'} name="add" size={20} />
          </TouchableOpacity>
        ) : (
          <View style={styles.quantity}>
            <TouchableOpacity
              style={styles.valuesBtn1}
              onPress={() => setCount(count - 1)}>
              <Icon style={{color: '#742013'}} size={15} name="remove" />
            </TouchableOpacity>
            <View style={styles.numberBox}>
              <Text style={styles.numbers}>{count}</Text>
            </View>
            <TouchableOpacity
              style={styles.valuesBtn2}
              onPress={() => setCount(count + 1)}>
              <Icon style={{color: '#742013'}} size={15} name="add" />
            </TouchableOpacity>
          </View>
        )}

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
  bundledText: {
    fontSize: 10,
    color: 'black',
    fontWeight: '500',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  bundledPrice: {
    paddingLeft: 7,
    fontSize: 10,
    color: 'black',
    fontWeight: '500',
  },
  numbers: {
    fontSize: 11,
  },
  valuesBtn1: {
    height: 25,
    width: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valuesBtn2: {
    height: 25,
    width: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    width: 70,
    height: 25,
    borderRadius: 8,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
