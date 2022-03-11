import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BackNav from '../BackNav';
import Stores from './Stores';
import myStyles from '../styles/styles';

const token = 'AAAA-BBBB-CCCC-DDDD';
const url =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const headerConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  },
};

export class Branches extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    this.state = {
      branches: [],
    };
  }

  componentDidMount() {
    let arr = [];
    fetch(`${url}/get/all/branches`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            //console.log(jsonRes);

            jsonRes.map((branches, i) => {
              let data = {
                id: branches.id,
                key: i,
                image: branches.image,
                name: branches.name,
                floor: branches.floor,
                distance: '1.1 km', //it needs to calculated from google maps using customer location
              };
              arr.push(data);
            });
            //console.log(arr);
            this.setState({
              branches: arr,
            });
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
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
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.branches.map(branch => (
              <TouchableOpacity
                key={branch.key}
                onPress={() =>
                  this.props.navigation.navigate(this.props.route.params.name, {
                    name: 'AddToCart',
                    branchId: branch.id,
                  })
                }>
                <Stores branch={branch} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
