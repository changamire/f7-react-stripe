import React, { memo } from 'react';
import 'framework7-icons';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm.jsx';

const CheckoutPage = (props) => {
  const {
    cost,
  } = props;
  return (
    <Elements>
      <CheckoutForm cost={cost} />
    </Elements>
  );
};

CheckoutPage.propTypes = {
  cost: PropTypes.number.isRequired,
};

export default memo(CheckoutPage);
