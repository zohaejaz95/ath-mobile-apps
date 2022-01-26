import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BackNav from '../BackNav';
import Stores from './Stores';
import myStyles from '../styles/styles';

export class Branches extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
  }

  render() {
    var branches = {
      branches: [
        {
          key: 1,
          image:
            'https://images.pexels.com/photos/10152629/pexels-photo-10152629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          name: 'Al Majaz Waterfront',
          floor: 'Ground Floor',
          distance: '1.1 km',
        },
        {
          key: 2,
          image:
            'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          name: 'Dubai Mall',
          floor: 'Ground Floor',
          distance: '4.5 km',
        },
      ],
    };
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BackNav navigation={this.props.navigation} login={false} />
        <View style={styles.branchesBox}>
          <View style={styles.mapBox}>
            <Text style={myStyles.heading}>Nearby Stores</Text>
            <TouchableOpacity style={styles.mapBtn}>
              <Icon size={20} name="map-marked-alt" style={styles.iconMap} />
              <Text style={styles.colorMap}>Map</Text>
            </TouchableOpacity>
          </View>
          {branches.branches.map(branch => (
            <TouchableOpacity
              key={branch.key}
              onPress={() =>
                this.props.navigation.navigate(this.props.route.params.name, {
                  name: 'AddToCart',
                })
              }>
              <Stores branch={branch} />
            </TouchableOpacity>
          ))}
        </View>

        <Text></Text>
      </View>
    );
  }
}

export default Branches;

const styles = StyleSheet.create({
  branchesBox: {
    margin: 10,
  },
  mapBox: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapBtn: {
    width: 75,
    height: 35,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  colorMap: {
    color: '#742013',
    marginLeft: 5,
  },
  iconMap: {
    color: '#742013',
  },
});
