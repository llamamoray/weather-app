import { combineReducers } from 'redux'
import weather from './weather'

const app = combineReducers({
  weather,
});

export default app