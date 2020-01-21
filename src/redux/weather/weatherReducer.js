import { LOADING_SUCCESS } from "./weatherActionTypes";

const initialState = {
  country: undefined,
  city: undefined,
  temperature: undefined,
  description: undefined,
  error: undefined,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case LOADING_SUCCESS: {
      const { weather } = action.payload;
      return {
        temperature: weather.main.temp,
        city: weather.name,
        country: weather.sys.country,
        description: weather.weather[0].description,
        error: ''
      };
    }
    default:
      return state;
  }
}