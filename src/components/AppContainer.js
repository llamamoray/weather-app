import { connect } from 'react-redux';
import { loadWeather } from '../redux/weather/weatherActions';
import App from './App';

function mapStateToProps(state) {
  const { temperature, city, country, description, error } = state.weather;
  return {
    temperature,
    city,
    country,
    description,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWeather: (city, country) => dispatch(loadWeather(city, country)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
