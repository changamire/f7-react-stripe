import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import App from './components/App.jsx';

import store from './store/store';

import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7React from 'framework7-react';
import 'framework7/css/framework7.bundle.css';

import './css/app.css';
import './css/icons.css';


Framework7.use(Framework7React);

const AppWithStripe = (props) => {
  return (
    <StripeProvider apiKey='pk_test_***'>
      <Provider store={store}>
        <App />
      </Provider>
    </StripeProvider>
  );
};

ReactDOM.render(
  React.createElement(AppWithStripe),
  document.getElementById('app'),
);

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
