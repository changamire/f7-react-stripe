
import React from 'react';

import {
  App,
  View
} from 'framework7-react';

import routes from '../routes';

export default class extends React.Component {

  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'F7 Stripe', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
          };
        },

        // App routes
        routes: routes
      }
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >
        <View main className="safe-areas" url="/" />
      </App>
    )
  }
};
