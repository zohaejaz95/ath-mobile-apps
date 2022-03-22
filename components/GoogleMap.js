import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function GoogleMap({navigation, route}) {
  const [region, setRegion] = useState({
    latitude: 25.2048,
    longitude: 55.2708,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    setLocation('Search for your location');
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      async function fetchSearchLocation() {
        var location = JSON.parse(await AsyncStorage.getItem('location'));

        if (location !== null) {
          setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          setLocation(location.location);
        }
        // Do something when the screen is focused
      }
      fetchSearchLocation();

      return () => {
        //AsyncStorage.removeItem('location');
        // alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
      subscribeLocationLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'Alisuq needs to access your location',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  // return () => {
  //     Geolocation.clearWatch(watchID);
  // };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        // alert(JSON.stringify(position));
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        // const currentLongitude =
        //     JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        // const currentLatitude =
        //     JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        // setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        // setCurrentLatitude(currentLatitude);
        AsyncStorage.removeItem('location');
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setLocation('Search for your location');
      },
      error => {
        alert(error.message);
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        // console.log(position);

        //getting the Longitude from the location json
        // const currentLongitude =
        //     JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        // const currentLatitude =
        //     JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        // setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        // setCurrentLatitude(currentLatitude);

        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };

  const onRegionChangeComplete = async region => {
    setRegion(region);
    var location = JSON.parse(await AsyncStorage.getItem('location'));

    if (location !== null) {
      Geocoder.init('AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4');
      Geocoder.from(region.latitude, region.longitude)
        .then(json => {
          // var addressComponent = json.results[0].address_components[0];
          var address = json.results[0].formatted_address;
          setLocation(address);
          // alert(address);
          // console.log(address);
        })
        .catch(error => console.warn(error));
    }
  };

  const confirmLocationBtnPressed = async () => {
    AsyncStorage.removeItem('location');

    Geocoder.init('AIzaSyD2d-znOMcFJpf5dPNcYhjeRA27CtJbCQ4');
    Geocoder.from(region.latitude, region.longitude)
      .then(async json => {
        var filtered_array = json.results[0].address_components.filter(
          function (address_component) {
            return address_component.types.includes('country');
          },
        );
        var country = filtered_array.length ? filtered_array[0].short_name : '';

        var app_opened_country = JSON.parse(
          await AsyncStorage.getItem('country'),
        );

        if (
          (country == 'AE' && app_opened_country.name_en == 'UAE') ||
          (country == 'SA' && app_opened_country.name_en == 'KSA') ||
          (country == 'EG' && app_opened_country.name_en == 'Egypt')
        ) {
          navigation.push('Add Address', {
            latitude: region.latitude,
            longitude: region.longitude,
            coupon: route.params ? route.params.coupon : '',
          });
        } else {
          alert("Alisuq doesn't cover this area yet.");
        }
      })
      .catch(error => console.warn(error));
  };

  return (
    <SafeAreaView>
      {/* <View style={styles.container}> */}
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={region => onRegionChangeComplete(region)}>
        {/* <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }}> */}
        {/* <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} /> */}
        {/* </Marker> */}
        {/* <Icon name={"map-marker"} size={40} color="red" style={{alignSelf: "center", position: "absolute", top: "50%"}} /> */}
        {/* <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.confirmLocationBtn}>
                            <Text style={styles.confirmLocationText}>CONFIRM LOCATION</Text>
                        </TouchableOpacity>
                    </View> */}
      </MapView>
      {/* <Image source={require("../assets/images/locationblack.png")} style={{ width: 40, height: 40, alignSelf: "center", position: "absolute", top: "50%" }} /> */}
      {/* <Image
        source={require('../assets/images/pin.png')}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          position: 'absolute',
          top: '50%',
        }}
      /> */}
      <View style={styles.topNav}>
        <Image source={require('../asset/logo.png')} style={styles.logo} />
        <EntypoIcon
          name={'cross'}
          size={26}
          color="#414350"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.searchInput}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', padding: 10}}
          onPress={() => navigation.push('Search Location')}>
          <EvilIcon name={'location'} size={26} color="#414350" />
          <Text style={styles.searchText}>{location}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locateMeView}>
        <TouchableOpacity
          style={styles.locateMeBtn}
          onPress={requestLocationPermission}>
          <EvilIcon name={'location'} size={24} color="#414350" />
          <Text style={styles.locateMeBtnText}>Locate Me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.confirmLocationBtn}
          onPress={confirmLocationBtnPressed}>
          <Text style={styles.confirmLocationText}>CONFIRM LOCATION</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  topNav: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: Platform.OS == 'ios' ? 80 : 70,
    top: Platform.OS == 'ios' ? 30 : 0,
  },
  map: {
    // flex: 1
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // zIndex: -1
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  searchInput: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 120 : 100,
    backgroundColor: 'white',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 5,
    padding: 0,
    // flexDirection: "row",
    // alignItems: "center",
    width: '90%',
  },
  searchText: {
    fontSize: Platform.OS == 'ios' ? 14 : 14,
    fontWeight: 'bold',
    marginRight: '5%',
    color: '#414350',
  },
  locateMeView: {
    padding: 5,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 10,
    bottom: Platform.OS == 'ios' ? 185 : 100,
    borderRadius: 20,
  },
  locateMeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locateMeBtnText: {
    marginRight: 10,
    fontSize: Platform.OS == 'ios' ? 13 : 14,
  },
  bottomView: {
    padding: 5,
    backgroundColor: 'white',
    // alignSelf: "flex-end",
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 120 : 25,
    width: '100%',
  },
  confirmLocationBtn: {
    backgroundColor: '#C78E2B',
    height: Platform.OS == 'ios' ? 43 : 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmLocationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Platform.OS == 'ios' ? 13 : 14,
  },
});

export default GoogleMap;
