const stripe_key = 'sk_test_*UPDATE_ME*';
const stripe = require('stripe')(stripe_key);


exports.handler = async function (event, context, callback) {

  console.log(`Received event ${JSON.stringify(event)}`);

  //Now we have a token and an amount we can take payment from Stripe
  const body = JSON.parse(event.body);
  const charge = await stripe.charges.create({
    amount: body.cost,
    currency: 'usd',
    description: 'Example charge',
    source: body.token.token.id,
  });

  console.log(`Stripe charge result ${JSON.stringify(charge)}`);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
    }),
  };

  callback(null, response);
};

