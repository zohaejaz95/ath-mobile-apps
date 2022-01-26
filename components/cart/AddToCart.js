import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';

import BackNav from '../BackNav';
import Items from './Items';
import ViewCart from './ViewCart';

const {height} = Dimensions.get('window');
const heightScr = height * 0.8;

export class AddToCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = {
      items: [
        {
          key: 1,
          image:
            'https://images.pexels.com/photos/10152629/pexels-photo-10152629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          name: 'Iced Green Tea Mango and Cold Cup',
          price: 'AED 69.00',
          points: 10,
        },
        {
          key: 2,
          image:
            'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          name: 'Iced Green Tea Yuzu and Cold Cup',
          price: 'AED 49.00',
          points: 15,
        },
      ],
    };
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BackNav navigation={this.props.navigation} login={false} />
        <View style={{flex: 7}}>
          <View style={styles.menuOptions}>
            <Icon style={styles.iconColor} size={25} name="grip-lines" />
            <TouchableOpacity style={styles.selectedBtn}>
              <Text style={styles.selectedColor}>Bundles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.unselectedBtn}>
              <Text style={styles.unselectedColor}>Hot Beverages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.unselectedBtn}>
              <Text style={styles.unselectedColor}>Cold Beverages</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.mainText}>Bundles</Text>
            {items.items.map(item => (
              <View key={items.key}>
                <Items items={item} />
              </View>
            ))}
            <Text style={styles.mainText}>Hot Beverages</Text>
            {items.items.map(item => (
              <View key={items.key}>
                <Items items={item} />
              </View>
            ))}
            <Text style={styles.mainText}>Cold Beverages</Text>
            {items.items.map(item => (
              <View key={items.key}>
                <Items items={item} />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <View style={styles.itemsCart}>
            <Text style={styles.priceColor}>0 Items Selected</Text>
            <Text style={styles.selectedColor}>AED 00.00</Text>
          </View>
          <TouchableOpacity
            style={styles.viewCartBtn}
            title="OPEN BOTTOM SHEET"
            onPress={() => this.RBSheet.open()}>
            <Text style={styles.viewCart}> View Cart</Text>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={heightScr}
          openDuration={250}>
          <ViewCart />
        </RBSheet>
      </View>
    );
  }
}
// customStyles={{
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// }}
export default AddToCart;

const styles = StyleSheet.create({
  selectedColor: {
    color: 'white',
    fontSize: 12,
  },
  priceColor: {
    color: 'white',
    fontSize: 11,
  },
  unselectedColor: {
    fontSize: 12,
  },
  iconColor: {
    color: '#742013',
  },
  selectedBtn: {
    backgroundColor: '#742013',
    width: 70,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselectedBtn: {},
  menuOptions: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#742013',
    paddingLeft: 15,
  },
  bottom: {
    flex: 0.6,
    backgroundColor: '#742013',
    width: '100%',
    flexDirection: 'row',
  },
  itemsCart: {
    flex: 1,
    marginTop: 7,
    marginLeft: 15,
  },
  viewCart: {
    flex: 1,
    textAlign: 'right',
    marginRight: 15,
    color: 'white',
    fontSize: 14,
  },
  viewCartBtn: {
    width: 90,
    height: 60,
    marginTop: 15,
    alignItems: 'center',
  },
});
