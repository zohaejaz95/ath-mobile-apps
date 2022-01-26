import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
//import font from './styles/GOUDOS.ttf';
const colour = '#742013';
var page = 'home';
const Navigations = props => {
  const {navigation} = props;
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.options}
        onPress={() => navigatePage(navigation, 'home')}>
        <Icon
          style={{color: page === 'home' ? colour : 'grey'}}
          name="canadian-maple-leaf"
          size={20}></Icon>
        <Text style={{color: page === 'home' ? colour : 'grey'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.options}
        onPress={() => navigatePage(navigation, 'rewards')}>
        {/* <Icon name="bars" size={20}></Icon> */}
        <Text style={styles.tims}>Tims</Text>
        <Text style={{color: page === 'rewards' ? colour : 'grey'}}>
          Rewards
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Icon
          style={{color: page === 'stores' ? colour : 'grey'}}
          name="map-marker-alt"
          size={20}></Icon>
        <Text style={{color: page === 'stores' ? colour : 'grey'}}>Stores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Icon2
          style={{color: page === 'more' ? colour : 'grey'}}
          name="signal-cellular-alt"
          size={20}
          style={styles.icon}></Icon2>
        <Text style={{color: page === 'more' ? colour : 'grey'}}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigations;

function navigatePage(nav, pg) {
  page = pg;
  if (pg === 'home') {
    return nav.navigate('Landing');
  }
  if (pg === 'rewards') {
    return nav.navigate('Rewards');
  }
  if (pg === 'stores') {
    return nav.navigate('Landing');
  }
  if (pg === 'more') {
    return nav.navigate('Landing');
  }
}
const styles = StyleSheet.create({
  navbar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 0.3,
    borderColor: '#e5e4e2',
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tims: {
    fontFamily: 'serif',
    color: page === 'rewards' ? colour : 'grey',
  },
  icon: {
    transform: [{rotate: '270deg'}],
  },
});
