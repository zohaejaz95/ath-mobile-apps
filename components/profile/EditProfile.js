import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BackNav from '../BackNav';

const EditProfile = props => {
  return (
    <View>
      <BackNav
        navigation={props.navigation}
        login={true}
        innerText="Edit Account"
      />
      <View>
        <View>{/* <Image source={{uri: ''}} /> */}</View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
