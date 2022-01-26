import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Password from './components/login/Password';
import Forget from './components/login/Forget';
import Location from './components/Location';
import Branches from './components/branches/Branches';
import Categories from './components/menu/Categories';
import AddToCart from './components/cart/AddToCart';
import Rewards from './components/rewards/Rewards';
import DineIn from './components/dineIn/DineIn';
import Reservation from './components/reservation/Reservation';

const Stack = createNativeStackNavigator();
export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{headerShown: false}}
              // options={{
              //   headerTitle: props => <Header login={false} {...props} />,
              // }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Password"
              component={Password}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Forget"
              component={Forget}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Branches"
              component={Branches}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddToCart"
              component={AddToCart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Rewards"
              component={Rewards}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DineIn"
              component={DineIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Reservation"
              component={Reservation}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
export default App;
