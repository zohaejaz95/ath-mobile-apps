import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import BackNav from '../BackNav';

const {width} = Dimensions.get('window');
const widthBox = width / 2 - 20;
const token = 'AAAA-BBBB-CCCC-DDDD';
const url =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branchId: props.route.params.branchId,
      type: props.route.params.type,
      categories: [],
    };
  }
  componentDidMount() {
    let arr = [];
    console.log(this.props.route.params.type);
    fetch(`${url}/get/category/branch/${this.props.route.params.branchId}`, {
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
            jsonRes.map((categories, i) => {
              let data = {
                id: categories.id,
                image: categories.image,
                name: categories.name,
              };
              arr.push(data);
            });
            //console.log(arr);
            this.setState({
              categories: arr,
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
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BackNav navigation={this.props.navigation} login={false} />
        <View style={styles.menuOptions}>
          {this.state.categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.menuBox}
              onPress={() =>
                this.props.navigation.navigate(this.props.route.params.name, {
                  category: category.id,
                  categoryName: category.name,
                  branchId: this.state.branchId,
                  type: this.state.type,
                })
              }>
              <Image
                style={styles.images}
                source={{
                  uri: category.image,
                }}></Image>
              <Text style={styles.menuText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
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
