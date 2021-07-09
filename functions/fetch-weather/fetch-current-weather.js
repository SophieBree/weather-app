const fetch = require("node-fetch");

const API_SECRET = process.env.REACT_APP_API_KEY;

exports.handler = async (event, context) => {
  try {
    const { city } = event.queryStringParameters;
    const current_url = `https://api.weatherbit.io/v2.0/current?city=${city}&country=Australia&key=${API_SECRET}`;

    const response = await fetch(current_url);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

/*
const handler = async (event) => {
  



}

module.exports = { handler }
*/
