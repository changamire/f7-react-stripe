import React, { memo } from 'react';
import { CardElement } from 'react-stripe-elements';

import {
  Block, BlockTitle,
} from 'framework7-react';

const CardDetails = () => (
  <Block>
    <BlockTitle>Card details</BlockTitle>
    <CardElement style={{ base: { fontSize: '14px' } }} />
  </Block>
);

export default memo(CardDetails);
