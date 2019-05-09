import { connect } from 'react-redux';
import { loadWeather } from '../actions/weatherActions';
import App from './App';

function mapDispatchToProps(dispatch) {
  return {
    loadWeather: (city, country) => dispatch(loadWeather(city, country)),
  };
}

export default connect(null, mapDispatchToProps)(App);
