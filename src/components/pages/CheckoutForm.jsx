import React,  { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectStripe } from 'react-stripe-elements';

import 'framework7-icons';

import {
  Page,
  List,
  Button
} from 'framework7-react';

import {
  TAKE_PAYMENT,
} from '../../store/constants/stripe';

import CardDetails from './CardDetails.jsx';

class CheckoutForm extends PureComponent {

  constructor(props) {
    super(props);
  }

  pay() {
    const { $f7: app } = this;
    app.preloader.show();
    const {
      stripe,
      cost,
    } = this.props;
    if (stripe) {
      this.props.takePayment({stripe, cost});
      app.preloader.hide();
    } else {
      console.log('Error');
      app.preloader.hide();
    }
  }

  render() {
    return (
      <Page>
        <form>
          <CardDetails/>
          <List>
            <Button onClick={() => this.pay()}>Pay</Button>
          </List>
        </form>
      </Page>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  takePayment: data => dispatch({ type: TAKE_PAYMENT, payload: data }),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  injectStripe,
);

export default enhance(CheckoutForm);
