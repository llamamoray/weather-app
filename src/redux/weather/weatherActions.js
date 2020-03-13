import { START_LOADING, LOADING_SUCCESS, LOADING_FAILURE } from "./weatherActionTypes";
import { delay } from "../../utils/delay";

const Api_Key = '54360e056cc0866724607dadfbe71bc2';

export function fetchWeather(city, country) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`)
    .then(res => {
      if (res.status !== 200) {
        throw Error(res.json());
      }
      return res.json();
    });
}

function startLoading() {
  return {
    type: START_LOADING,
  };
}

function loadWeatherSuccess(weather) {
  return {
    type: LOADING_SUCCESS,
    payload: {
      weather,
    },
  }
}

function loadWeatherFailure(error) {
  return {
    type: LOADING_FAILURE,
    payload: {
      error,
    }
  };
}

export function loadWeather(city, country) {
  return dispatch => {
    dispatch(startLoading());
    return delay()
      .then(() => fetchWeather(city, country)
        .then(response => dispatch(loadWeatherSuccess(response)))
        .catch(error => dispatch(loadWeatherFailure(error))));
  }
}

// for part 5
/** fetches a 5 day forecast with 3 hour periods */
export function fetchFiveDayForecast(city, country) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${Api_Key}&mode=json&units=metric`)
    .then(res => {
      if (res.status !== 200) {
        throw Error(res.json());
      }

      return res.json();
    }).then(res => console.log(res));
}

export function fetchFiveDayForecastByCityId(cityId) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${Api_Key}&mode=json&units=metric`)
    .then(res => {
      if (res.status !== 200) {
        throw Error(res.json());
      }
      return res.json();
    });
}
