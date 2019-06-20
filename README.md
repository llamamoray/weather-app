# weather-app

App using OpenWeatherMap to display weather data.
https://openweathermap.org/current

This application is built using React and Redux. Some useful places to get started with these technologies are:

- https://reactjs.org/docs/hello-world.html
- https://redux.js.org/introduction/getting-started

You may also find that using the react and redux dev tools in Chrome useful for the tasks:

- https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

# Running the application

1. Install packages. We recommend using yarn `yarn install`
2. Run `yarn start`
3. You can view the application at http://localhost:3000/

The application is created using create-react-app which is set up with hot-loading. On saving
a file whilst running webpack will compile the code and reload the page in the browser.

Note: The entry-point to the application is `./src/index.js`. This sets up the redux store and loads `./src/components/AppContainer.js` which renders `./src/components/App.jsx`.

# Tasks

## 1 - Fix the error

Try searching for the weather at your location by populating the 'City', and 'Country' fields. You will notice that the application throws an error `Cannot read property 'setState' of undefined`. The first thing to do it fix this error.

## 2 - Move state into the redux store

You will note that all the application state is stored in the App component `./src/components/App.jsx`. The next task is to move this state into the Redux store. 

You will see that the action creator `loadWeather` is already set up to be dispatched in a prop also named `loadWeather` in `AppContainer.js`. 

Hint: The missing parts of the puzzle are that this prop isn't being called from the App component, the reducer `./src/reducers/weather.js` isn't doing anything with the action payload, and the redux state isn't being provided to the App component by the AppContainer.

## 3 - Handle API Errors

If you query the API with a fictitious location like "Oxforb, UK", you will notice that a 404 is returned from the API. Handle this in the redux state and remove the last piece of component state (`error`) from `App.jsx`.


