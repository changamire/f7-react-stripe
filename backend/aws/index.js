exports.handler = async function (event, context, callback) {

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

