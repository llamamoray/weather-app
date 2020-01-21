import { combineReducers } from 'redux'
import weather from './weather/weatherReducer'

const app = combineReducers({
  weather,
});

export default app