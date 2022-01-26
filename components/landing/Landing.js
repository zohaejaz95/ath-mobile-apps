import React, {Component, useState} from 'react';
import {
  Image,
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import Header from '../Header';
import PurchaseOptions from './PurchaseOptions';
import Menu from './Menu';
import Navigations from '../Navigations';

const {width} = Dimensions.get('window');
const widthImg = width - 40;
const height = width * 0.5;

export class Landing extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    //console.log(props);
    this.state = {
      images: [
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      showLoginButton: true, //reads local storage for account id. Changes showLoginButton accordingly.
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header
          login={this.state.showLoginButton}
          navigation={this.props.navigation}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sliderView}>
            <SliderBox
              style={styles.image}
              autoplay
              circleLoop
              images={this.state.images}
              autoplayInterval={4000}
              dotStyle={{width: 0, height: 0}}
            />
          </View>
          <PurchaseOptions navigation={this.props.navigation} />
          <Menu />
        </ScrollView>
        <Navigations navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: widthImg,
    height,
    resizeMode: 'cover',
  },
  sliderView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Landing;
