import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';

import BackNav from '../BackNav';

const {width} = Dimensions.get('window');
const widthBox = width / 2 - 20;

export class Categories extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BackNav navigation={this.props.navigation} login={false} />
        <View style={styles.menuOptions}>
          <View style={styles.menuBox}>
            <Image
              style={styles.images}
              source={{
                uri: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              }}></Image>
            <Text style={styles.menuText}>Bundles</Text>
          </View>
          <View style={styles.menuBox}>
            <Image
              style={styles.images}
              source={{
                uri: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}></Image>
            <Text style={styles.menuText}>Hot Beverages</Text>
          </View>
        </View>
        <View style={styles.menuOptions}>
          <View style={styles.menuBox}>
            <Image
              style={styles.images}
              source={{
                uri: 'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}></Image>
            <Text style={styles.menuText}>Sandwiches</Text>
          </View>
          <View style={styles.menuBox}>
            <Image
              style={styles.images}
              source={{
                uri: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}></Image>
            <Text style={styles.menuText}>Snacking</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  menu: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  menuOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuBox: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: '#e5e4e2',
    marginTop: 10,
    height: 110,
  },
  images: {
    width: widthBox,
    height: 80,
    marginBottom: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  menuText: {
    color: '#742013',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
});
