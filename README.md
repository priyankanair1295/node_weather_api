# Weather API Lambda Function

## Overview
This is a simple Node.js Lambda function that provides a REST API for getting weather forecast data from OpenWeatherMap based on provided latitude and longitude coordinates.

The API is deployed using the Serverless Framework.

## Usage
#### Base endpoint: https://abc123.execute-api.us-east-1.amazonaws.com/dev
#### Example Endpoint: https://abc123.execute-api.us-amazonaws.com/dev/weather?lat=35&lon=139

## Query Parameters:
lat: Latitude
lon: Longitude

The function expects lat and lon to be provided as query parameters.

## Documentation

### Install Dependencies
npm install

### Local Development
Invoke locally using:
serverless invoke local -f weather
	Use a test event JSON with request query parameters.

## Deploy
To deploy to AWS:
serverless deploy

## Configuration
Configure AWS credentials on your local machine.
Set API keys and other configs in serverless.yml file.

## Demo
Use the below link for the demonstration of the API:
https://db7hbk6az6z4bwzkhivr26rd2e0yeccx.lambda-url.us-east-1.on.aws/?lat=35&lon=139
