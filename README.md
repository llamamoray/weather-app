# weather-app

App using OpenWeatherMap to display weather data.
https://openweathermap.org/current

This application is built using React and Redux. Some useful places to get started with these technologies are:

# Running the application

1. Install packages. We recommend using yarn `yarn install`
2. Run `yarn start`
3. You can view the application at http://localhost:3000/

The application is created using create-react-app which is set up with hot-loading. On saving
a file whilst running webpack will compile the code and reload the page in the browser.

# Tasks

## 1 - Fix the error when searching

## 2 - Handle errors on failed API keys/missing city or country

## 3 - Add LoadingIcon to indicate an active API query

## 4 - Change the app so that clicking on get weather adds a Weather Result row and keeps previous results.

## 5 - Add an "expand" button to the WeatherResult to display the daily 5 day maximum temperatures. 
This should show a list of day labels with the maximum temperatures. e.g.
`Today: 6C Tomorrow: 7C Friday: 6.5C ...`

The api call required to get the data for this is in weatherActions.js and here are helper functions in utils/date.js (getDaysOffset, and getCurrentDayNumber) which deal with timezones for you. 