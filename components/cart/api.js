import axios from 'axios';

export const doPayment = (amount, paymentId, tokenId) => {
  const body = {
    amount: amount,
    tokenId: tokenId,
    id: paymentId,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios
    .post('http://localhost:5000//stripe/charge', body, {headers})
    .then(({data}) => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      return Promise.reject('Error in making payment', error);
    });
};
