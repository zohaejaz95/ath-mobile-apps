import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Ratings = props => {
  const rates = [1, 2, 3, 4, 5];
  return (
    <View style={{flexDirection: 'row'}}>
      {rates.map(rate => (
        <TouchableOpacity key={rate}>
          <Icon
            name="star"
            color={'silver'}
            size={25}
            style={{marginRight: 4}}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({});
