import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const ViewCart = props => {
  //const {props} = props
  const [items, setItems] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(10);
  const [grandTotal, setGrandTotal] = useState(0);
  const token = 'AAAA-BBBB-CCCC-DDDD';
  const url =
    Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
  useEffect(() => {
    setTotal(0);
    getCart();
    return () => console.log('unmounting...');
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      //setItems([]);
      console.log(props);
      setTotal(0);
      getCart();
      console.log('Focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Unfocused');
      };
    }, []),
  );
  const getCart = async () => {
    let arr = [];

    var numb;
    var rounded;
    try {
      const value = await AsyncStorage.getItem('cart');
      //console.log(value);
      if (value !== null) {
        let data = JSON.parse(value);
        //console.log(data);
        setTotal(0);
        //total = 0;
        const promise = data.map(element => {
          fetch(`${url}/get/menu/items/${element.item}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then(async res => {
              try {
                let itemList;
                const jsonRes = await res.json();
                if (res.status === 200) {
                  //console.log(jsonRes);
                  if (element.cart[0].count > 0) {
                    itemList = {
                      id: jsonRes.id,
                      name: jsonRes.name,
                      price: jsonRes.price,
                      discount: jsonRes.discount,
                      size: 'standard',
                      quantity: element.cart[0].count,
                    };
                    arr.push(itemList);
                    numb =
                      total +
                      (itemList.price -
                        (itemList.price * itemList.discount) / 100) *
                        itemList.quantity;
                    rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
                    setTotal(rounded);
                    //console.log(arr);
                  }
                  if (element.cart[1].count > 0) {
                    itemList = {
                      id: jsonRes.id,
                      name: jsonRes.name,
                      price: jsonRes.custom.small,
                      discount: jsonRes.discount,
                      size: 'small',
                      quantity: element.cart[1].count,
                    };
                    arr.push(itemList);
                    numb =
                      total +
                      (itemList.price -
                        (itemList.price * itemList.discount) / 100) *
                        itemList.quantity;
                    rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
                    setTotal(rounded);
                  }
                  if (element.cart[2].count > 0) {
                    itemList = {
                      id: jsonRes.id,
                      name: jsonRes.name,
                      price: jsonRes.custom.large,
                      discount: jsonRes.discount,
                      size: 'large',
                      quantity: element.cart[2].count,
                    };
                    arr.push(itemList);

                    numb =
                      total +
                      (itemList.price -
                        (itemList.price * itemList.discount) / 100) *
                        itemList.quantity;
                    rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
                    setTotal(rounded);
                  }
                  //console.log(items);
                }
              } catch (err) {
                console.log(err);
              }
            })
            .catch(err => {
              console.log(err);
            });
        });
        setTimeout(() => {
          Promise.all(promise).then(function () {
            setItems(arr);
            console.log(items);
            //setProm(prom);
          });
        }, 1000);

        //return data.length;
        // value previously stored
      } else {
      }
    } catch (e) {
      //return false;
      // error reading value
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text style={styles.delivery}>DELIVERY AT</Text>
        <View style={styles.location}>
          <Icon style={styles.icon} name="map-marker-alt" size={12}>
            <Text> </Text>
            <Text style={styles.locText}> Your location here</Text>
          </Icon>
          {/* <Text style={styles.locText}>Add</Text> */}
        </View>
      </View>
      <View style={styles.arrival}>
        <View style={{flexDirection: 'row'}}>
          <Icon size={12} name="clock"></Icon>
          <Text style={styles.timeIcon}>Arrives under -- minutes</Text>
        </View>
        <TouchableOpacity style={styles.schedule}>
          <Text style={styles.locText}>Schedule Time</Text>
        </TouchableOpacity>
      </View>

      <View>
        {items.map(item => (
          <View style={styles.itemsCart}>
            <View style={{flexDirection: 'row'}} key={item.id}>
              <Icon style={{color: '#742013'}} size={12} name="dot-circle" />
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.items}>{item.name}</Text>
                  <Text style={styles.size}>({item.size} size)</Text>
                </View>
                <Text style={styles.items}>
                  AED{' '}
                  {(item.price - (item.price * item.discount) / 100) *
                    item.quantity}
                </Text>
              </View>
            </View>

            <View style={styles.quantity}>
              <TouchableOpacity style={styles.valuesBtn1}>
                <Icons style={{color: '#742013'}} size={15} name="remove" />
              </TouchableOpacity>
              <View style={styles.numberBox}>
                <Text style={styles.numbers}>{item.quantity}</Text>
              </View>
              <TouchableOpacity style={styles.valuesBtn2}>
                <Icons style={{color: '#742013'}} size={15} name="add" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.inputField}>
        <TextInput
          fontSize={12}
          defaultValue={instructions}
          onChangeText={instr => setInstructions(instr)}
          placeholder="Add special instructions (optional)"
        />
      </View>
      <Text style={styles.offer}>Apply Offer</Text>
      <View style={styles.itemsCart}>
        <View>
          <Text style={styles.itemTotal}>Item Total</Text>
          <Text style={styles.itemDelivery}>Delivery Fee</Text>
          <Text style={styles.grandTotal}>Grand Total</Text>
        </View>
        <View>
          <Text style={styles.itemTotal}>AED {total}</Text>
          <Text style={styles.itemDelivery}>AED {delivery}</Text>
          <Text style={styles.grandTotal}>AED {total + delivery}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.props.navigation.navigate('Payment')}>
        <Text style={styles.locText}>Choose Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};
//onPress={props.navigation.navigate('Payment')}
export default ViewCart;

const styles = StyleSheet.create({
  itemTotal: {
    color: '#696969',
    fontSize: 14,
  },
  itemDelivery: {
    color: '#acacac',
    fontSize: 12,
  },
  grandTotal: {
    color: 'black',
    fontSize: 16,
  },
  offer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    color: '#742013',
    fontSize: 12,
    fontWeight: '500',
    height: 24,
    borderStyle: 'dashed',
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  inputField: {
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#c0c0c0',
    borderBottomWidth: 0.5,
  },
  numberBox: {
    width: 24,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f0ec',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  numbers: {
    fontSize: 11,
  },
  valuesBtn1: {
    height: 24,
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
  itemsCart: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  items: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 5,
  },
  size: {
    fontSize: 11,
    marginLeft: 5,
  },
  heading: {
    backgroundColor: '#742013',
    width: '100%',
    height: 50,
    //flexDirection: 'row',
    justifyContent: 'space-around',
  },
  delivery: {
    marginTop: 5,
    marginLeft: 8,
    color: 'white',
    fontSize: 10,
  },
  icon: {
    color: 'white',
  },
  location: {
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'space-between',
  },
  locText: {
    color: 'white',
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'center',
  },
  arrival: {
    flexDirection: 'row',
    backgroundColor: '#FFF5EE',
    width: '100%',
    height: 30,
    paddingLeft: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeIcon: {
    marginTop: -3,
    marginLeft: 4,
  },
  schedule: {
    marginRight: 8,
    width: 100,
    height: 25,
    backgroundColor: '#742013',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
});
