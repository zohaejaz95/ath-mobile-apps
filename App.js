import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Header from './components/Header';

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
              // options={{
              //   headerTitle: props => <Header login={false} {...props} />,
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>

        {/* <Landing login={true} />
          <Login /> */}
      </SafeAreaView>
    );
  }
}
//Landing ---- login prop is true if user has already logged in otherwise false.
export default App;
