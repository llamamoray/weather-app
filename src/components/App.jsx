import React from 'react';
import PropTypes from 'prop-types';
import WeatherResult from './WeatherResult/WeatherResult';
import SearchForm from './SearchForm/SearchForm';
import './App.css';

export default class App extends React.Component {
  getWeather(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    this.props.loadWeather(city, country);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          Weather
        </header>
        <div className="wrapper">
          <div className="main">
            <SearchForm loadWeather={this.getWeather} error={this.props.error} />
            <WeatherResult
              temperature={this.props.temperature}
              city={this.props.city}
              country={this.props.country}
              description={this.props.description}
            />
          </div>
        </div>
      </div>);
  }
}

App.propTypes = {
  loadWeather: PropTypes.func.isRequired,
  temperature: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string,
};