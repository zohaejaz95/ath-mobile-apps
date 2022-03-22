// import React, {Component} from 'react';
// import {View, Button, StyleSheet} from 'react-native';
// import stripe from 'tipsi-stripe';
// import {doPayment} from './api';

// stripe.setOptions({
//   publishableKey:
//     'pk_test_51KQU3SFs1cdwjiHJwmRpu9DXE3AVCvBczFPnhFk0ZZoXkJEYmIesXlXPqLooASCT0qHHQaJJu2Hx18rwOQZHtXVE00xTDNMIwz',
// });

// export class StripePayment extends Component {
//   constructor(props) {
//     super(props);
//   }
//   requestPayment() {
//     let {paymentId, amount} = this.props.route.params;
//     this.setState({isPaymentPending: true});
//     return stripe
//       .paymentRequestWithCardForm()
//       .then(stripeTokenInfo => {
//         return doPayment(amount, paymentId, stripeTokenInfo.tokenId);
//       })
//       .then(() => {
//         console.warn('Payment succeeded!');
//       })
//       .catch(error => {
//         console.warn('Payment failed', {error});
//       })
//       .finally(() => {
//         this.setState({isPaymentPending: false});
//       });
//   }
//   //   requestPayment = () => {
//   //     return stripe
//   //       .paymentRequestWithCardForm()
//   //       .then(stripeTokenInfo => {
//   //         console.warn('Token created', {stripeTokenInfo});
//   //       })
//   //       .catch(error => {
//   //         console.warn('Payment failed', {error});
//   //       });
//   //   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Make a payment"
//           onPress={() => this.requestPayment}
//           disabled={this.state.isPaymentPending}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default StripePayment;
