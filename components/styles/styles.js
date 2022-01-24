import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  maroonColor: {
    color: '#7c2529', //pantone 1815c - Maroon
  },
  goldenColor: {
    color: '#decd63', //Pantone 459c - Golden
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    width: '85%',
    borderRadius: 25,
    height: 42,
    borderWidth: 1,
    borderColor: '#e5e4e2',
    paddingLeft: 15,
  },
  pin: {
    margin: 10,
    width: '15%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
  },
  pswdText: {
    color: '#742013',
    fontSize: 18,
  },
  text: {
    color: '#742013',
    margin: 5,
    marginBottom: 25,
  },
  password: {
    color: '#742013',
    fontSize: 18,
    marginTop: 25,
  },
  button: {
    marginTop: 25,
    marginBottom: 10,
    width: '85%',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#742013',
  },
  continue: {
    color: 'white',
    fontSize: 14,
  },
  heading: {
    color: '#742013',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
