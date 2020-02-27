import React,  { PureComponent } from 'react';

import {
  Page,
  Button
} from 'framework7-react';

class HomePage extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Button raised href="/checkout/" routeProps={{cost: 100}}>Checkout</Button>
      </Page>
    );
  }

};

export default HomePage;
