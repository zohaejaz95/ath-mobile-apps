import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';

const Working = props => {
  const {navigation} = props;
  const [work, setWork] = useState('');
  const url =
    Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

  useFocusEffect(
    React.useCallback(() => {
      async function getExportPoints() {
        fetch(`${url}/get/points`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(async res => {
            try {
              const jsonResp = await res.json();
              if (res.status === 200) {
                setWork(jsonResp[0].working);
              }
            } catch (err) {
              console.log(err);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
      getExportPoints();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Unfocused');
      };
    }, []),
  );
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon size={30} name="arrow-back" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.text}>How it Works</Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={{textAlign: 'justify'}}>{work}</Text>
      </View>
    </View>
  );
};

export default Working;

const styles = StyleSheet.create({
  header: {
    padding: 5,
    height: 50,
    flexDirection: 'row',
    //backgroundColor: '#D22B2B',
    backgroundColor: '#742013',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //left: '40%',
  },
  loc: {
    color: 'white',
    fontSize: 12,
  },
  textLoc: {
    color: 'white',
    fontSize: 14,
  },
  textLocation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
