const axios = require('axios');

module.exports.weather = async (event) => {

  const latitude = event.queryStringParameters?.lat;
  const longitude = event.queryStringParameters?.lon;
  
  const apiKey = '546e6e6025ab845c954dfe064d001365';

  try {
    if(!latitude || !longitude) {
      return {
        statusCode: 400,
        body: JSON.stringify({msg: 'lat and lon params required'}) 
      }
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    
    return {
      statusCode: 200,  
      body: JSON.stringify(response.data)
    }

  } catch (error) {

    console.log(error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({message: 'Error getting weather data'})
    }
  }

}

