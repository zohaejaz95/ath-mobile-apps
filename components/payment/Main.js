import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';
import React, {useEffect} from 'react';

export default function Main() {
  //const [publishableKey, setPublishableKey] = useState('');
  const publishableKey =
    'pk_test_51KQU3SFs1cdwjiHJwmRpu9DXE3AVCvBczFPnhFk0ZZoXkJEYmIesXlXPqLooASCT0qHHQaJJu2Hx18rwOQZHtXVE00xTDNMIwz';

  //   const fetchPublishableKey = async () => {
  //     const key = await fetchKey(); // fetch key from your server here
  //     setPublishableKey(key);
  //   };

  //   useEffect(() => {
  //     fetchPublishableKey();
  //   }, []);
  return (
    <StripeProvider publishableKey={publishableKey}>
      <PaymentScreen />
    </StripeProvider>
  );
}
