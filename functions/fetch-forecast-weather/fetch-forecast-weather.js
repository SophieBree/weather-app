const fetch = require("node-fetch");

const API_SECRET = process.env.REACT_APP_API_KEY;

exports.handler = async (event, context) => {
  try {
    const { city } = event.queryStringParameters;
    const forecast_url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=Australia&key=${API_SECRET}`;

    const response = await fetch(forecast_url);
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