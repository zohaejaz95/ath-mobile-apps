import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BackNav from '../BackNav';
import styleMain from '../styles/styles';
import Items from './Items';

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
        <View>
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
      </View>
    );
  }
}

export default AddToCart;

const styles = StyleSheet.create({
  selectedColor: {
    color: 'white',
    fontSize: 12,
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
});
