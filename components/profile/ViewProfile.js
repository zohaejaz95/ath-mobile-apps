import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BackNav from '../BackNav';

const ViewProfile = props => {
  return (
    <View style={styles.box}>
      <BackNav navigation={props.navigation} login={true} innerText="Profile" />
      <View>
        <View>{/* <Image source={{uri: ''}} /> */}</View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Icon size={20} name="edit" />
        </TouchableOpacity>
        <Text>Name</Text>
      </View>
      <View>
        <Text>Email</Text>
        <Text>Phone Number</Text>
        <Text>DoB</Text>
      </View>
      <View>
        <Text>Join us on Social Media</Text>
        <View>
          <TouchableOpacity>
            <Icon name="facebook" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="instagram" size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="twitter" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
  },
});
